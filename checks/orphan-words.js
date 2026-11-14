// Lists text blocks whose last line holds one word on its own.
(() => {
  const out = [];
  const els = [...document.querySelectorAll("p, li, dd, dt, h1, h2, h3, h4, figcaption, blockquote")].filter((e) => {
    const r = e.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && !e.closest('pre, svg, [aria-hidden="true"]') && !e.querySelector("p, li, div, dd");
  });
  for (const e of els) {
    const words = [];
    const tw = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = tw.nextNode())) {
      const re = /\S+/g;
      let m;
      while ((m = re.exec(n.textContent))) {
        const range = document.createRange();
        range.setStart(n, m.index);
        range.setEnd(n, m.index + m[0].length);
        const rects = range.getClientRects();
        if (rects.length) words.push({ w: m[0], y: Math.round(rects[rects.length - 1].top) });
      }
    }
    if (words.length < 4) continue;
    const lines = [...new Set(words.map((x) => x.y))];
    if (lines.length < 2) continue;
    const last = words.filter((x) => x.y === lines[lines.length - 1]);
    if (last.length === 1) out.push(`${e.tagName.toLowerCase()}: …${words.slice(-4).map((x) => x.w).join(" ")}`);
  }
  return out;
})();
