# Responsive Design Demos (Beginner‑friendly)

All examples live in this folder and use external CSS (no JavaScript needed). Open any HTML file in your browser and resize the window to see the behavior.

## Files
- index.html — Mobile‑first two‑column layout with Grid and media queries
- grid.html — Card grid using `auto-fit` + `minmax` (no breakpoints)
- images.html — Fluid images, `srcset`/`sizes`, and `picture`
- typography.html — Fluid type scale with `clamp()`
- navigation.html — CSS‑only hamburger that becomes a horizontal menu
- table.html — Table that stacks into readable cards on phones

## CSS
- assets/css/base.css — Shared reset, variables, containers, utilities
- assets/css/*.css — Page‑specific styles per demo

## Teaching Notes
- Start at `index.html` to explain mobile‑first and media queries.
- Use `grid.html` to show layout without breakpoints.
- Demonstrate image techniques in `images.html` and discuss performance.
- Explain `clamp()` in `typography.html` for smooth scaling.
- Show a simple responsive nav in `navigation.html` (checkbox trick).
- Cover data‑label stacking pattern in `table.html` for narrow screens.

> Tip on Windows: you can right‑click an HTML file and "Open with Live Server" (if you have the VS Code extension), or just open it directly in your browser.