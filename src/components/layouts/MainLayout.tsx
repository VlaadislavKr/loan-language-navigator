
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LocaleCode } from '@/lib/i18n/config';
import PageMetaComponent from '@/components/seo/PageMeta';
import { usePageMeta } from '@/hooks/use-page-meta';

interface MainLayoutProps {
  children: React.ReactNode;
  currentCountry?: string;
  currentLocale?: LocaleCode;
  pageMeta?: {
    page?: string;
    customData?: any;
  };
}

/**
 * Основной макет для страниц сайта
 * Включает Header, основное содержимое и Footer
 * Оптимизирован для server-side rendering
 */
const MainLayout = ({
  children,
  currentCountry = 'global',
  currentLocale = 'en',
  pageMeta = { page: 'home' }
}: MainLayoutProps) => {
  // Получаем метаданные для страницы
  const metadata = usePageMeta({
    page: pageMeta.page,
    locale: currentLocale,
    country: currentCountry,
    customData: pageMeta.customData
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageMetaComponent metadata={metadata} />
      <Header currentCountry={currentCountry} currentLocale={currentLocale} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer currentCountry={currentCountry} currentLocale={currentLocale} />
    </div>
  );
};

export default MainLayout;
