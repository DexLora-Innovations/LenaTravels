import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";

/**
 * Pure Vite SPA configuration.
 *
 * TanStack Start's SSR plugin (tanstackStart()) was removed because it:
 *   1. Outputs to dist/client/ with NO index.html (SSR generates HTML at runtime)
 *   2. Embeds absolute local Windows paths in dist/server manifest files
 *   3. Requires a Node.js SSR function on Vercel that depends on dist/server/
 *      which is gitignored — so Vercel never has it
 *
 * The app runs correctly as a pure client-side SPA:
 *   index.html → src/main.tsx → TanStack Router (client-side) → App
 *
 * TanStack Router itself (without Start) is kept — it works entirely
 * client-side. Only the SSR server rendering layer is removed.
 */
export default defineConfig({
  plugins: [react(), tailwindcss(), viteTsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Output to dist/ (not dist/client/) so Vercel finds index.html
    outDir: "dist",
    emptyOutDir: true,
  },
});
