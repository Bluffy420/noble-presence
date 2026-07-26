// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { execSync } from "child_process";
import path from "path";
function shellJsonPlugin() {
  return {
    name: "nba-shell-json",
    apply: "build",
    closeBundle() {
      const script = path.resolve(__dirname, "scripts/generate-shell.mjs");
      console.log("\n[shell.json] Generating\u2026");
      try {
        execSync(`node "${script}"`, { stdio: "inherit" });
        console.log("[shell.json] \u2713 dist/shell.json written\n");
      } catch (e) {
        console.error("[shell.json] \u2717 Failed:", e);
        process.exit(1);
      }
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    shellJsonPlugin()
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
export {
  vite_config_default as default
};
