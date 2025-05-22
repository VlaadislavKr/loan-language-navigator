
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleCode } from '@/lib/i18n/config';
import { PageMeta, getPageMetadata, generateHreflangLinks, generateJsonLd } from '@/lib/seo/metadata';

interface UsePageMetaProps {
  page?: string;
  locale?: LocaleCode;
  country?: string;
  customData?: Partial<PageMeta>;
}

/**
 * Хук для получения метаданных страницы
 * @param page - ключ страницы (например, "home", "credits")
 * @param locale - код локали (например, "en", "et")
 * @param country - код страны (например, "et", "lt")
 * @param customData - дополнительные метаданные
 */
export const usePageMeta = ({
  page = 'home',
  locale = 'en',
  country = 'global',
  customData = {}
}: UsePageMetaProps): PageMeta => {
  const [metadata, setMetadata] = useState<PageMeta>({
    title: '44Finance',
    description: 'Compare loan offers',
    canonical: 'https://44finance.com'
  });
  
  const location = useLocation();
  
  useEffect(() => {
    // Получаем базовые метаданные из хранилища
    const baseMeta = getPageMetadata(page, locale) || {
      title: '44Finance',
      description: 'Compare loan offers',
      canonical: 'https://44finance.com'
    };
    
    // Генерируем hreflang связи
    const hreflangLinks = generateHreflangLinks(country, page);
    
    // Генерируем JSON-LD для WebPage
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": baseMeta.title,
      "description": baseMeta.description,
      "url": baseMeta.canonical
    };
    
    // Объединяем все метаданные
    const completeMeta: PageMeta = {
      ...baseMeta,
      hreflang: hreflangLinks,
      jsonLd,
      ...customData
    };
    
    setMetadata(completeMeta);
  }, [page, locale, country, location.pathname, customData]);
  
  return metadata;
};
