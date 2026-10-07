#!/usr/bin/env python3
"""Serve the static traffic simulator without exposing repository metadata."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path, PurePosixPath
import os
import sys
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent


class SafeStaticHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def _is_hidden_path(self):
        path = unquote(urlsplit(self.path).path)
        return any(part.startswith(".") for part in PurePosixPath(path).parts if part not in ("", "/"))

    def do_GET(self):
        if self._is_hidden_path():
            self.send_error(404, "Not Found")
            return
        super().do_GET()

    def do_HEAD(self):
        if self._is_hidden_path():
            self.send_error(404, "Not Found")
            return
        super().do_HEAD()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else int(os.environ.get("PORT", "8000"))
    server = ThreadingHTTPServer(("0.0.0.0", port), SafeStaticHandler)
    print(f"Serving Traffic Simulator on 0.0.0.0:{port} (hidden files blocked)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
