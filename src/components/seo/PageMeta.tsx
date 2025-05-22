
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PageMeta } from '@/lib/seo/metadata';

interface PageMetaProps {
  metadata: PageMeta;
  children?: React.ReactNode;
  helmetContext?: any; // Для передачи контекста при SSR
}

/**
 * Компонент для добавления метаданных на страницу
 * Оптимизирован для SSR с использованием react-helmet-async
 */
const PageMetaComponent: React.FC<PageMetaProps> = ({ metadata, children, helmetContext }) => {
  const { title, description, canonical, hreflang, ogImage, jsonLd } = metadata;

  // SSR-совместимый провайдер для Helmet
  const helmetContent = (
    <Helmet>
      {/* Базовые мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Канонический URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph мета-теги */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter мета-теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Hreflang теги для мультиязычности */}
      {hreflang && Object.entries(hreflang).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Структурированные данные JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      
      {children}
    </Helmet>
  );

  // Если передан контекст, используем его для SSR
  if (helmetContext) {
    return <HelmetProvider context={helmetContext}>{helmetContent}</HelmetProvider>;
  }
  
  // В противном случае используем обычный режим
  return <HelmetProvider>{helmetContent}</HelmetProvider>;
};

export default PageMetaComponent;
