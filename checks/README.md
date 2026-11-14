# Checks

Paste a check into the browser console on the page you want to test, or run it from Playwright with `page.evaluate`. Each one returns a list; an empty list means it passed.

- `phone-width.js`: set the window to 375 or 320 pixels wide first. Lists anything wider than the screen, outside areas that are meant to scroll sideways.
- `orphan-words.js`: lists paragraphs, list items and headings whose last line holds a single word.

Fix orphans with `text-wrap: pretty` on body text and `text-wrap: balance` on headings; for very short labels, `balance` works better.
