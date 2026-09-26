"""Local prototype server with an editable, versioned Card Register API."""
from __future__ import annotations

import argparse
import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

from card_register_store import ConflictError, NotFoundError, RegisterStore, ValidationError, ROOT


class Handler(SimpleHTTPRequestHandler):
    store: RegisterStore

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT / 'prototype'), **kwargs)

    def _json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _body(self) -> dict:
        self._check_host()
        origin = self.headers.get('Origin')
        if origin and (urlsplit(origin).scheme != 'http' or urlsplit(origin).netloc != self.headers.get('Host')):
            raise ValidationError('Only this local devtool may save changes')
        if self.headers.get_content_type() != 'application/json':
            raise ValidationError('Expected JSON request')
        length = int(self.headers.get('Content-Length', '0'))
        if not 0 < length <= 250_000:
            raise ValidationError('Request is empty or too large')
        value = json.loads(self.rfile.read(length))
        if not isinstance(value, dict):
            raise ValidationError('Expected a JSON object')
        return value

    def _check_host(self) -> None:
        if urlsplit('http://' + self.headers.get('Host', '')).hostname not in {'localhost', '127.0.0.1'}:
            raise ValidationError('Only localhost may access the Card Register')

    def do_GET(self):
        if urlsplit(self.path).path == '/api/card-register':
            try:
                self._check_host()
                register, revision = self.store.load()
                self._json(200, {'register': register, 'revision': revision, 'assets': self.store.assets()})
            except (ValidationError, OSError, ValueError) as error:
                self._json(500, {'error': str(error)})
            return
        if urlsplit(self.path).path.startswith('/api/'):
            self._json(404, {'error': 'Unknown API route'})
            return
        super().do_GET()

    def _mutate(self, method: str) -> None:
        path = urlsplit(self.path).path
        try:
            body = self._body()
            parts = path.strip('/').split('/')
            if parts == ['api', 'card-register', 'entries'] and method == 'POST':
                register, revision, entry_id = self.store.add(body.get('revision'), body.get('values'), body.get('art', []), body.get('afterId'))
                self._json(201, {'register': register, 'revision': revision, 'entryId': entry_id})
            elif len(parts) == 4 and parts[:3] == ['api', 'card-register', 'entries'] and method == 'PUT':
                register, revision = self.store.edit(body.get('revision'), parts[3], body.get('values'), body.get('art', []))
                self._json(200, {'register': register, 'revision': revision, 'entryId': parts[3]})
            elif len(parts) == 5 and parts[:3] == ['api', 'card-register', 'entries'] and parts[4] == 'feedback' and method == 'PUT':
                register, revision = self.store.set_feedback(body.get('revision'), parts[3], body.get('feedback'))
                self._json(200, {'register': register, 'revision': revision, 'entryId': parts[3]})
            else:
                self._json(404, {'error': 'Unknown API route'})
        except ConflictError as error:
            self._json(409, {'error': str(error)})
        except NotFoundError as error:
            self._json(404, {'error': str(error)})
        except (ValidationError, ValueError, KeyError, json.JSONDecodeError) as error:
            self._json(400, {'error': str(error)})

    def do_POST(self):
        self._mutate('POST')

    def do_PUT(self):
        self._mutate('PUT')


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4173)
    parser.add_argument('--register', type=Path, default=None, help='Optional register file for testing')
    parser.add_argument('--check', action='store_true', help='Validate the register and exit without starting a server')
    args = parser.parse_args()
    Handler.store = RegisterStore(args.register) if args.register else RegisterStore()
    document, _ = Handler.store.load()
    if args.check:
        print(f'Card Register valid: {len(document["entries"])} entries, {len(document["fields"])} fields')
        return
    server = ThreadingHTTPServer(('127.0.0.1', args.port), Handler)
    print(f'Little Valley Cards: http://127.0.0.1:{args.port}/card-register.html ({len(document["entries"])} entries)', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
