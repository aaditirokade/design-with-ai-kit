// Lists elements that stick out past the right edge of the screen, outside areas meant to scroll sideways.
(() => {
  const w = document.documentElement.clientWidth;
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height || r.right <= w + 1) continue;
    if (el.closest('.overflow-x-auto, [style*="overflow-x"], pre, svg')) continue;
    out.push(`${el.tagName.toLowerCase()}.${String(el.className).split(" ").slice(0, 3).join(".")} · ${Math.round(r.right - w)}px too wide`);
  }
  return { pageWidth: document.documentElement.scrollWidth, screen: w, tooWide: out.slice(0, 30) };
})();
