/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import svgr from "vite-plugin-svgr";
import jsconfigPaths from "vite-jsconfig-paths";
import { resolve } from "path";

const SRC_PATH = "src";

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: "localhost", port: 3001, open: true },
  preview: { host: "localhost", port: 3001, open: true },
  plugins: [svgr(), jsconfigPaths(), react()],
  resolve: {
    alias: {
      public: resolve(__dirname, "./public"),
      "@App": resolve(SRC_PATH, "app/"),
      "@Pages": resolve(SRC_PATH, "pages/"),

      "@Shared": resolve(SRC_PATH, "shared/"),
      "@Widgets": resolve(SRC_PATH, "widgets/"),
      "@Assets": resolve(SRC_PATH, "assets/"),

      "@Components": resolve(SRC_PATH, "components/"),
      "@Constants": resolve(SRC_PATH, "constants/"),
      "@Containers": resolve(SRC_PATH, "containers/"),
    },
  },
});
