import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svg from "@neodx/svg/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svg({
      root: "assets/icons",
      output: "public/images/svg-sprites",
      group: true,
      fileName: "{name}.{hash:8}.svg",
      metadata: {
        path: "src/shared/types/icon.ts",
        runtime: {
          viewBox: true,
        },
      },
    }),
    viteTsconfigPaths(),
  ],
  build: {
    outDir: "./build",
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    open: true,
  },
});
