import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// removed tanstackStart plugin for SPA migration
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [
    // react plugin
    react(),
    tailwindcss(),
    viteTsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
