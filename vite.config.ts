import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { execSync } from "child_process";
import path from "path";

/**
 * After every production build, runs scripts/generate-shell.mjs which
 * writes dist/shell.json. Has zero effect during `vite dev`.
 */
function shellJsonPlugin() {
  return {
    name: "nba-shell-json",
    apply: "build" as const,
    closeBundle() {
      const script = path.resolve(__dirname, "scripts/generate-shell.mjs");
      console.log("\n[shell.json] Generating…");
      try {
        execSync(`node "${script}"`, { stdio: "inherit" });
        console.log("[shell.json] ✓ dist/shell.json written\n");
      } catch (e) {
        console.error("[shell.json] ✗ Failed:", e);
        process.exit(1);
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
    emptyOutDir: true,
  },
});
