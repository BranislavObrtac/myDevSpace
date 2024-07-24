import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), TanStackRouterVite(), svgr()],
  css: {
    modules: {
      generateScopedName: isProduction
        ? "[hash:base64:5]"
        : "[name]__[local]___[hash:base64:5]",
    },
  },
  build: {
    sourcemap: false,
  },
});
