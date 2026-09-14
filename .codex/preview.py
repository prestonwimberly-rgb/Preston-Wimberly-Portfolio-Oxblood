from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os
import sys

class PreviewHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        target = super().translate_path(path)
        if not Path(target).suffix and Path(target + '.html').is_file():
            return target + '.html'
        return target

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

port = int(os.environ['PORT'])
handler = partial(PreviewHandler, directory=sys.argv[1])
with ThreadingHTTPServer(('127.0.0.1', port), handler) as server:
    print(f'Preview: http://127.0.0.1:{port}/', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
