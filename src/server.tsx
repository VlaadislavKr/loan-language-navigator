
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import App from './App';

interface RenderResult {
  html: string;
  helmetContext: { helmet: HelmetServerState };
}

/**
 * Серверный рендеринг приложения
 * @param url - URL запроса
 */
export function render(url: string): RenderResult {
  // Создаем контекст для react-helmet-async
  const helmetContext: { helmet?: HelmetServerState } = {};
  
  // Рендерим приложение в строку с использованием StaticRouter вместо BrowserRouter
  const appWithoutRouter = () => {
    const AppContent = () => (
      <App />
    );
    
    // Извлекаем содержимое App без BrowserRouter
    const AppWithoutRouterContent = () => {
      // @ts-ignore - игнорируем ошибку типа для простоты реализации
      const originalRender = AppContent().props.children.props.children[2];
      return originalRender.props.children;
    };
    
    return <AppWithoutRouterContent />;
  };
  
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        {appWithoutRouter()}
      </StaticRouter>
    </HelmetProvider>
  );
  
  // Возвращаем результат рендеринга и контекст для Helmet
  return { 
    html, 
    helmetContext: helmetContext as { helmet: HelmetServerState }
  };
}

/**
 * Создание полного HTML документа
 * @param url - URL запроса
 */
export function renderFullPage(url: string): string {
  const { html, helmetContext } = render(url);
  const { helmet } = helmetContext;
  
  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${html}</div>
        <script src="/assets/index.js"></script>
      </body>
    </html>
  `;
}

/**
 * Экспортируем функцию создания сервера для использования в express или другом серверном фреймворке
 */
export function createServer() {
  return {
    render,
    renderFullPage
  };
}
