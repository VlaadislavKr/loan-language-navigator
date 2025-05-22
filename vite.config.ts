
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Добавляем поддержку SSR
  build: {
    outDir: 'dist',
    // Режим сборки для SSR
    ssr: mode === 'ssr' ? 'src/server.tsx' : false,
    // Делаем отдельные сборки для клиента и сервера
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html')
      }
    }
  },
}));
