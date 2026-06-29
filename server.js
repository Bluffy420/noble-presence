import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "dist");
const app = express();

// Strip trailing slashes before anything else so that /team/ → /team.
// express.static sees a dist/team/ directory and would 301 → /team/ without this.
app.use((req, _res, next) => {
  if (req.path !== "/" && req.path.endsWith("/")) {
    const clean = req.path.slice(0, -1) + (req.url.slice(req.path.length) || "");
    req.url = clean;
  }
  next();
});

// Serve built static assets from dist/ with long cache headers.
// index: false ensures the catch-all owns "/" so the HTML is always fresh.
// redirect: false prevents express.static from 301-redirecting /team → /team/
// when it finds a dist/team/ directory (Vite route chunk output).
app.use(
  express.static(dist, {
    index: false,
    redirect: false,
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
