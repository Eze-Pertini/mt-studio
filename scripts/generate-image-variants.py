# -*- coding: utf-8 -*-
"""
MT Studio - Variantes responsive de las imagenes
================================================
Herramienta local, no corre en el build. Genera versiones mas chicas de
cada imagen de public/ y escribe src/data/image-manifest.json con el
mapa que consume responsiveImage().

Por que: en movil el navegador descargaba la misma imagen de 1600px que
en escritorio. PageSpeed lo reporta como "Mejora la entrega de imagenes",
178 KiB en la ficha de proyecto, y es lo que sostiene el LCP en 4,5 s.

Cada variante lleva un hash del contenido en el nombre. Eso permite
cachearlas para siempre sin miedo: si la imagen cambia, cambia el nombre.

Uso, despues de agregar o reemplazar una imagen:

    python scripts/generate-image-variants.py

Requiere Pillow (pip install --user Pillow). No hace falta para compilar
ni para desplegar: si el manifiesto no tiene una imagen, responsiveImage
devuelve la original y el sitio funciona igual.
"""
import hashlib
import io
import json
import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
MANIFEST = ROOT / 'src' / 'data' / 'image-manifest.json'

# Carpetas con imagenes de contenido. Los favicons quedan afuera: son
# chicos y tienen tamaños fijos por especificacion.
SOURCES = ['projects', 'img', 'blog']
WIDTHS = [480, 768, 1200]
QUALITY = 82


def content_hash(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()[:8]


def variants_for(path: Path):
    """Genera las variantes de una imagen y devuelve sus entradas."""
    with Image.open(path) as im:
        im = im.convert('RGB')
        original_width = im.width
        out = []
        for width in WIDTHS:
            # Nunca agrandar: una variante mas ancha que el original no
            # agrega detalle y pesa mas.
            if width >= original_width:
                continue
            height = round(im.height * width / original_width)
            resized = im.resize((width, height), Image.LANCZOS)
            buf = io.BytesIO()
            resized.save(buf, 'WEBP', quality=QUALITY, method=6)
            data = buf.getvalue()
            name = f'{path.stem}-{width}.{content_hash(data)}.webp'
            (path.parent / name).write_bytes(data)
            out.append({'width': width, 'file': name})
        return out, original_width


def main():
    manifest = {}
    generados = 0

    for source in SOURCES:
        base = PUBLIC / source
        if not base.is_dir():
            continue
        for path in sorted(base.rglob('*.webp')):
            # No re-procesar variantes ya generadas. Se reconocen porque
            # llevan el hash en un segundo punto: cover-480.a1b2c3d4.webp.
            # Mirar si el nombre termina en digito descartaba screen-1.webp.
            if '.' in path.stem:
                continue
            # Las carpetas -viejo son material de proyectos retirados y no
            # las referencia ninguna ficha.
            if path.parent.name.endswith('-viejo'):
                continue
            entries, original_width = variants_for(path)
            if not entries:
                continue
            url_dir = '/' + str(path.parent.relative_to(PUBLIC)).replace(os.sep, '/')
            key = f'{url_dir}/{path.name}'
            manifest[key] = {
                'width': original_width,
                'variants': [
                    {'width': e['width'], 'src': f"{url_dir}/{e['file']}"} for e in entries
                ],
            }
            generados += len(entries)
            print(f'  {key}  ({original_width}px)  ->  ' + ', '.join(str(e['width']) for e in entries))

    MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    print(f'\n{generados} variantes de {len(manifest)} imagenes')
    print(f'manifiesto: {MANIFEST.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
