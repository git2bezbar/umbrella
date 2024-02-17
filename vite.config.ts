import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
 
export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
