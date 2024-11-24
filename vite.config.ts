import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait(),
    federation({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        subContainer: "http://localhost:5002/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "rxjs"],
    }),
  ],
  preview: { strictPort: false },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
