# Forward-production test

This fixture renders with Playwright `1.62.1` and the locally installed stable
Microsoft Edge channel. The renderer does not download a browser at runtime.

From this directory on Windows:

```powershell
npm.cmd ci --ignore-scripts
npm.cmd run render
```

`--ignore-scripts` avoids Playwright's browser download because the renderer
launches `channel: "msedge"`. If Microsoft Edge is unavailable, the test is
blocked until the expected browser is installed; do not silently substitute a
different renderer and compare hashes as if they were equivalent.

The script reads `forward-static.fixture.json`, asserts that the approved test
copy and absence of CTA match the DOM, verifies fonts, dimensions, core colors,
safe-area placement, logo size, and non-overlap, then writes the two PNGs under
`tests/artifacts/`.
