"""Reproduz cópias web das fotos oficiais. Uso: python scripts/prepare-assets.py [pasta-originais]."""
from pathlib import Path
from PIL import Image, ImageOps
import sys
import shutil

root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1]) if len(sys.argv) > 1 else root.parent / 'basile-source-assets'
target = root / 'src/assets'
(target / 'photos').mkdir(parents=True, exist_ok=True)
(target / 'brand').mkdir(parents=True, exist_ok=True)
photos = {
    'filipe': 'filipe-perfil-oficial.jpg',
    'fachada': 'clinica-fachada-alta.jpg',
    'consultorio': 'clinica-consultorio.jpg',
    'centro-cirurgico': 'clinica-centro-cirurgico.jpg',
    'recuperacao': 'clinica-recuperacao.jpg',
    'espera': 'clinica-espera.jpg',
}
for name, file in photos.items():
    with Image.open(source / file) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        for width in (560, 960):
            photo = image.copy()
            photo.thumbnail((width, round(width * image.height / image.width)))
            photo.save(target / 'photos' / f'{name}-{width}.webp', 'WEBP', quality=86, method=6)
        print(name, image.size)
for file in ('logo.png', 'logo-branco.png'):
    shutil.copy2(source / file, target / 'brand' / file)
