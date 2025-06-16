import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // 👇 This ensures correct asset paths in production
  base: "/",

  server: {
    host: "::",
    port: 8080,
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/build/**',
        '**/.next/**',
        '**/.nuxt/**',
        '**/.vscode/**',
        '**/.idea/**',
        '**/coverage/**',
        '**/.nyc_output/**',
        '**/logs/**',
        '**/*.log',
        '**/tmp/**',
        '**/temp/**'
      ],
      usePolling: false,
      interval: 1000
    }
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@tanstack/react-query",
      "lucide-react"
    ]
  }
}));