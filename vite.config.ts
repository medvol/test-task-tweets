import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/test-task-tweets/",
  build: {
    outDir: "dist",
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  optimizeDeps: {
    include: ["preact/hooks"],
  },

  resolve: {
    alias: {
      "/@": join(__dirname, "src"),
    },
  },
});
