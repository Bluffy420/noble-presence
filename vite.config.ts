import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { execSync } from "child_process";
import path from "path";

/**
 * Vite plugin: after every production build, runs scripts/generate-shell.mjs
 * which writes dist/shell.json.  The plugin only fires on `vite build` — not
 * during `vite dev` — so it has zero impact on hot-reload speed.
 */
function shellJsonPlugin() {
  return {
    name: "nba-shell-json",
    closeBundle() {
      const script = path.resolve(__dirname, "scripts/generate-shell.mjs");
      console.log("\n[nba-shell-json] Generating dist/shell.json …");
      try {
        execSync(`node "${script}"`, { stdio: "inherit" });
        console.log("[nba-shell-json] ✓ dist/shell.json written\n");
      } catch (e) {
        console.error("[nba-shell-json] ✗ Failed to generate shell.json:", e);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    shellJsonPlugin(),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "dist",
  },
});
