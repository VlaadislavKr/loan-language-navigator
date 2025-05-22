
import { hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

/**
 * Клиентский рендеринг с гидратацией для SSR
 * В режиме разработки работает как обычный рендеринг
 */
if (import.meta.env.DEV) {
  // В режиме разработки используем обычный рендеринг
  import('react-dom/client').then(({ createRoot }) => {
    createRoot(document.getElementById("root")!).render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
  });
} else {
  // В продакшене используем гидратацию для SSR
  hydrateRoot(
    document.getElementById("root")!,
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}
