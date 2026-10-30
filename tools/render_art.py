"""Genera el arte de cada carta (art/<id>.webp) renderizando sus modelos 3D en Chromium sin ventana.

Uso: python3 tools/render_art.py [http://127.0.0.1:8765]  (con un servidor estático sirviendo la carpeta del juego)
"""
import asyncio
import base64
import os
import sys

from playwright.async_api import async_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:8765'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'art')
ONLY = sys.argv[2].split(',') if len(sys.argv) > 2 else None


async def main():
    os.makedirs(OUT, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(args=['--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
        page = await browser.new_page()
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
        await page.goto(f'{BASE}/tools/art.html')
        await page.wait_for_function('window.ready === true', timeout=30000)
        ids = await page.evaluate('window.cardIds')
        for cid in ids:
            if ONLY and cid not in ONLY:
                continue
            url = await page.evaluate(f'window.renderCard({cid!r})')
            data = base64.b64decode(url.split(',', 1)[1])
            with open(os.path.join(OUT, f'{cid}.webp'), 'wb') as f:
                f.write(data)
            print(f'{cid}: {len(data) // 1024} KB')
        if errors:
            print('ERRORES:', errors[:5])
        await browser.close()

asyncio.run(main())
