#!/usr/bin/env python3
"""Bring every shelf cover to the size and shape the shelf asks for.

The shelf shows each cover in a fixed box (252x320, aspect 0.7875) with
object-fit: cover, which means anything of a different shape loses the part
that sticks out. Square covers lose 21% of their width -- enough to cut the
title off "The Adventure of the Speckled Band" -- and tall covers lose 15% of
their height, which chops the top line off several.

So each cover is padded outward along its own edge until the shape matches the
box, which costs no picture at all: the covers here have borders, dark surrounds
or flat skies at their edges, so the added strip reads as more of the same
rather than as a margin. Then anything still under 640px tall is resampled up
so the browser downscales it instead of stretching it, and sharpened to put
back what resampling softens.

Every file is already tracked by git, so this is reversible:
    git checkout -- images/
"""
import os
import sys

from PIL import Image, ImageFilter

TARGET_AR = 252 / 320      # the .book-card img box, measured in the browser
TARGET_H = 640             # 2x the 320px the shelf displays at
MAX_SCALE = 3.0            # beyond this, upscaling is just blur with extra steps
SHARPEN = dict(radius=2, percent=70, threshold=3)


def grow(im, ar):
    """Extend the outermost row or column outward until the shape matches."""
    cur = im.width / im.height
    if abs(cur - ar) < 0.005:
        return im

    if cur > ar:                       # too wide: grow top and bottom
        want = im.width / ar
        half = int(round((want - im.height) / 2))
        if half < 1:
            return im
        canvas = Image.new('RGB', (im.width, im.height + half * 2))
        top = im.crop((0, 0, im.width, 1)).resize((im.width, half), Image.BILINEAR)
        bot = im.crop((0, im.height - 1, im.width, im.height)).resize((im.width, half), Image.BILINEAR)
        canvas.paste(top, (0, 0))
        canvas.paste(im, (0, half))
        canvas.paste(bot, (0, half + im.height))
        return canvas

    want = im.height * ar              # too tall: grow left and right
    half = int(round((want - im.width) / 2))
    if half < 1:
        return im
    canvas = Image.new('RGB', (im.width + half * 2, im.height))
    left = im.crop((0, 0, 1, im.height)).resize((half, im.height), Image.BILINEAR)
    right = im.crop((im.width - 1, 0, im.width, im.height)).resize((half, im.height), Image.BILINEAR)
    canvas.paste(left, (0, 0))
    canvas.paste(im, (half, 0))
    canvas.paste(right, (half + im.width, 0))
    return canvas


def grow_height(im):
    """Resample up to twice the displayed height, but never past MAX_SCALE."""
    if im.height >= TARGET_H:
        return im, 1.0
    scale = min(TARGET_H / im.height, MAX_SCALE)
    size = (int(round(im.width * scale)), int(round(im.height * scale)))
    return im.resize(size, Image.LANCZOS), scale


def process(path, apply):
    im = Image.open(path)
    has_alpha = im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info)
    im = im.convert('RGBA' if has_alpha and path.lower().endswith('.png') else 'RGB')

    # Already the shape and size the shelf wants: leave it alone rather than
    # re-encode it for nothing and lose a little quality each time.
    if abs(im.width / im.height - TARGET_AR) < 0.005 and im.height >= TARGET_H:
        return (im.width, im.height), (im.width, im.height), im.width / im.height, 1.0, False

    before = (im.width, im.height)
    shaped = grow(im, TARGET_AR)
    scaled, factor = grow_height(shaped)
    if factor > 1:
        scaled = scaled.filter(ImageFilter.UnsharpMask(**SHARPEN))

    if apply:
        lower = path.lower()
        if lower.endswith(('.jpg', '.jpeg')):
            scaled.save(path, 'JPEG', quality=85, optimize=True, progressive=True)
        elif lower.endswith('.webp'):
            scaled.save(path, 'WEBP', quality=88, method=6)
        else:
            scaled.save(path, optimize=True)

    return before, (scaled.width, scaled.height), scaled.width / scaled.height, factor, True


def main():
    apply = '--write' in sys.argv
    root = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'images')
    files = sorted(f for f in os.listdir(root)
                   if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')))

    print('%-46s %-11s -> %-11s %-6s %s' % ('cover', 'size', 'new', 'scale', 'aspect'))
    print('-' * 92)
    total_before = total_after = 0
    worst_ar = 0.0
    changed = 0
    for name in files:
        path = os.path.join(root, name)
        total_before += os.path.getsize(path)
        before, after, ar, factor, touched = process(path, apply)
        worst_ar = max(worst_ar, abs(ar - TARGET_AR))
        if apply:
            total_after += os.path.getsize(path)
        if touched:
            changed += 1
        note = '  <-- padded' if touched else '  (already correct)'
        print('%-46s %-11s -> %-11s %-6.2f %.4f%s' % (
            name, '%dx%d' % before, '%dx%d' % after, factor, ar, note))

    print('-' * 92)
    print('%d covers, %d to change, target aspect %.4f, worst deviation %.4f' % (
        len(files), changed, TARGET_AR, worst_ar))
    if apply:
        print('size: %.2f MB -> %.2f MB' % (total_before / 1e6, total_after / 1e6))
    else:
        print('DRY RUN -- pass --write to change the files')
        print('current size: %.2f MB' % (total_before / 1e6))


if __name__ == '__main__':
    main()
