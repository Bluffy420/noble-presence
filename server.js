import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "dist");
const app = express();

// Serve built static assets from dist/ with long cache headers.
// index: false ensures the catch-all owns "/" so the HTML is always fresh.
app.use(
  express.static(dist, {
    index: false,
    maxAge: "1y",
    etag: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

// SPA fallback: every non-asset request returns index.html so
// TanStack Router can resolve /services, /about, /blogs, etc. on refresh.
app.get("*", (_req, res) => {
  res.set("Cache-Control", "no-cache");
  res.sendFile(path.join(dist, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`SPA server listening on :${port}`);
});
