"""Bundle the Vite production build as one offline HTML file."""
from base64 import b64encode
from functools import lru_cache
from mimetypes import guess_type
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
dist = root / 'dist'
page = (dist / 'index.html').read_text(encoding='utf-8')
asset_path = re.compile(r'(?:\.\.?/|/)(?:assets|fonts|images)/[\w./%+-]+\.(?:svg|webp|png|jpe?g|gif|otf|woff2?)\b')

@lru_cache(maxsize=None)
def data_url(url):
    asset = dist / url.removeprefix('../').removeprefix('./').lstrip('/')
    mime = guess_type(asset.name)[0] or 'application/octet-stream'
    return f'data:{mime};base64,{b64encode(asset.read_bytes()).decode("ascii")}'


def embed_assets(content):
    return asset_path.sub(lambda match: data_url(match.group()), content)


def inline_style(match):
    css = (dist / match.group(1).removeprefix('./').lstrip('/')).read_text(encoding='utf-8')
    return '<style>\n' + embed_assets(css) + '\n</style>'


def inline_script(match):
    script = (dist / match.group(1).removeprefix('./').lstrip('/')).read_text(encoding='utf-8')
    script = embed_assets(script).replace('</script', '<\\/script')
    return '<script type="module">\n' + script + '\n</script>'


page = re.sub(r'<link rel="stylesheet"[^>]*href="([^\"]+)"[^>]*>', inline_style, page)
page = re.sub(r'<script type="module"[^>]*src="([^\"]+)"[^>]*></script>', inline_script, page)
page = re.sub(r'href="(?:\./|/)favicon\.png"', f'href="{data_url("/favicon.png")}"', page)
page = re.sub(r'(?<=http-equiv="Content-Security-Policy" content=")[^"]+',
              "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; font-src data:; object-src 'none'; base-uri 'none'; form-action 'none'",
              page)
output = root / 'genesisfxmarkets-landing.html'
output.write_text(page, encoding='utf-8')
print(f'{output.name} · {output.stat().st_size:,} bytes')
