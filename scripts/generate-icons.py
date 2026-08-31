"""Regenerate every favicon, PWA icon and social share image from the logo.

Run after replacing `src/assets/hyc-logo.png`:

    python scripts/generate-icons.py

Filenames are fixed -- `index.html` and `public/site.webmanifest` reference
them by path, so this script overwrites in place rather than inventing names.

Two treatments, matching how the assets were originally built:

  * Square icons use the *emblem only* (the Y monogram with its aircraft,
    cruise ship and wave). The "HYC Travels" wordmark is unreadable below
    ~128px, so it is cropped off. The emblem is found automatically as the
    first block of artwork above the largest horizontal gap in the logo.
  * `og-image.png` uses the *whole* logo on a white card over a brand
    gradient, because share previews render large enough for the wordmark.

Requires Pillow (`pip install Pillow`).
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "src" / "assets" / "hyc-logo.png"
PUBLIC = ROOT / "public"

WHITE = (255, 255, 255, 255)

# Gradient anchors for the OG card, both derived from the logo's own blues:
# a lift towards the wave cyan at the bottom-left, the navy deepened at the
# top-right. Sampled values live in the "Branding assets" table in README.md.
OG_BRIGHT = (7, 93, 153)
OG_DEEP = (0, 21, 48)


def ink_mask(rgba: np.ndarray) -> np.ndarray:
    """Pixels that read as artwork: opaque enough, and not near-white."""
    return (rgba[..., 3] > 40) & (rgba[..., :3].max(axis=2) < 235)


def content_box(mask: np.ndarray, y0: int = 0, y1: int | None = None):
    sub = mask[y0 : y1 if y1 is not None else mask.shape[0]]
    ys = np.where(sub.any(axis=1))[0]
    xs = np.where(sub.any(axis=0))[0]
    return int(xs.min()), int(y0 + ys.min()), int(xs.max()) + 1, int(y0 + ys.max()) + 1


def emblem_of(logo: Image.Image) -> Image.Image:
    """Crop the mark above the wordmark, splitting on the tallest blank band."""
    mask = ink_mask(np.array(logo))
    rows = mask.sum(axis=1)

    gaps, start = [], None
    for y, filled in enumerate(rows):
        if not filled and start is None:
            start = y
        elif filled and start is not None:
            gaps.append((y - start, start))
            start = None
    # Take the FIRST substantial band, not the widest one: the gap below the
    # wordmark (above the tagline) is the taller of the two, and splitting
    # there would keep the type the emblem crop exists to drop. Bands hugging
    # the top edge are margin rather than a separator.
    floor = max(4, int(logo.height * 0.015))
    split = next((y for length, y in gaps if y > 0 and length >= floor), None)
    if split is None:
        return logo.crop(content_box(mask))

    return logo.crop(content_box(mask, 0, split))


def on_white(art: Image.Image, size: int, coverage: float) -> Image.Image:
    """Fit `art` into a square white canvas, occupying `coverage` of its width."""
    box = int(round(size * coverage))
    fitted = art.copy()
    fitted.thumbnail((box, box), Image.LANCZOS)

    canvas = Image.new("RGBA", (size, size), WHITE)
    canvas.alpha_composite(
        fitted, ((size - fitted.width) // 2, (size - fitted.height) // 2)
    )
    return canvas


def rounded_mask(size: tuple[int, int], radius: int, ss: int = 4) -> Image.Image:
    """Antialiased rounded-rectangle mask (PIL's own draw call has hard edges)."""
    big = Image.new("L", (size[0] * ss, size[1] * ss), 0)
    ImageDraw.Draw(big).rounded_rectangle(
        (0, 0, size[0] * ss - 1, size[1] * ss - 1), radius=radius * ss, fill=255
    )
    return big.resize(size, Image.LANCZOS)


def og_gradient(width: int, height: int) -> Image.Image:
    """45-degree wash: bright at the bottom-left, deep navy at the top-right."""
    x = np.linspace(0.0, 1.0, width)[None, :]
    y = np.linspace(0.0, 1.0, height)[:, None]
    t = ((x + (1.0 - y)) / 2.0)[..., None]

    bright = np.array(OG_BRIGHT, dtype=float)
    deep = np.array(OG_DEEP, dtype=float)
    px = bright + (deep - bright) * t
    return Image.fromarray(px.round().astype(np.uint8), "RGB").convert("RGBA")


def build_og_image(logo: Image.Image, width=1200, height=630) -> Image.Image:
    canvas = og_gradient(width, height)

    art = logo.copy()
    art.thumbnail((int(width * 0.50), int(height * 0.70)), Image.LANCZOS)

    pad = 56
    card_w, card_h = art.width + pad * 2, art.height + pad * 2
    card_x, card_y = (width - card_w) // 2, (height - card_h) // 2
    mask = rounded_mask((card_w, card_h), radius=40)

    shadow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    shadow.paste((0, 0, 0, 70), (card_x, card_y + 10), mask)
    canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(18)))

    card = Image.new("RGBA", (card_w, card_h), WHITE)
    card.alpha_composite(art, (pad, pad))
    card.putalpha(mask)
    canvas.alpha_composite(card, (card_x, card_y))
    return canvas


def save(image: Image.Image, name: str) -> None:
    path = PUBLIC / name
    image.save(path, optimize=True)
    print(f"  {name:<24} {image.width}x{image.height}  {path.stat().st_size:>7,} B")


def main() -> None:
    logo = Image.open(SOURCE).convert("RGBA")
    logo = logo.crop(content_box(ink_mask(np.array(logo))))
    emblem = emblem_of(Image.open(SOURCE).convert("RGBA"))
    print(f"source {SOURCE.name}: {logo.width}x{logo.height}")
    print(f"emblem crop:          {emblem.width}x{emblem.height}\n")

    # Browser tabs and launchers: emblem edge to edge, minimal breathing room.
    save(on_white(emblem, 16, 0.94), "favicon-16x16.png")
    save(on_white(emblem, 32, 0.94), "favicon-32x32.png")
    save(on_white(emblem, 180, 0.88), "apple-touch-icon.png")
    save(on_white(emblem, 192, 0.88), "icon-192.png")
    save(on_white(emblem, 512, 0.88), "icon-512.png")

    # Android crops maskable icons to an arbitrary shape; only the middle
    # ~66% of the canvas is guaranteed to survive.
    save(on_white(emblem, 512, 0.66), "icon-maskable-512.png")

    save(on_white(emblem, 600, 0.84), "og-image-square.png")
    save(build_og_image(logo), "og-image.png")

    ico = on_white(emblem, 48, 0.94)
    ico.save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    size = (PUBLIC / "favicon.ico").stat().st_size
    print(f"  {'favicon.ico':<24} 16/32/48  {size:>7,} B")


if __name__ == "__main__":
    main()
