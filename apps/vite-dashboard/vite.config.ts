import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts", // File for setting up testing environment
    css: true, // Enable CSS processing for tests
  },
});
