
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LocaleCode } from '@/lib/i18n/config';

interface MainLayoutProps {
  children: React.ReactNode;
  currentCountry?: string;
  currentLocale?: LocaleCode;
}

/**
 * Основной макет для страниц сайта
 * Включает Header, основное содержимое и Footer
 * Оптимизирован для server-side rendering
 */
const MainLayout = ({
  children,
  currentCountry = 'global',
  currentLocale = 'en'
}: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentCountry={currentCountry} currentLocale={currentLocale} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer currentCountry={currentCountry} currentLocale={currentLocale} />
    </div>
  );
};

export default MainLayout;
