import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
    },
  },
  plugins: [vue()],
});
