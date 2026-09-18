"""Obtém fontes abertas e suas licenças; nunca copia fontes de outro cliente."""
from pathlib import Path
from urllib.request import urlopen

root = Path(__file__).resolve().parents[1]
target = root / 'src/assets/fonts'
target.mkdir(parents=True, exist_ok=True)
for family, font in [('urbanist', 'Urbanist%5Bwght%5D.ttf'), ('manrope', 'Manrope%5Bwght%5D.ttf')]:
    base = f'https://raw.githubusercontent.com/google/fonts/main/ofl/{family}/'
    for remote, local in [(font, f'{family}-variable.ttf'), ('OFL.txt', f'{family}-OFL.txt')]:
        data = urlopen(base + remote, timeout=30).read()
        (target / local).write_bytes(data)
        print(local, len(data))
