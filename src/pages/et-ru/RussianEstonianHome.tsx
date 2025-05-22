
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { getTranslation } from '@/lib/i18n/translations';

/**
 * Главная страница русскоязычной версии для Эстонии
 * Оптимизирована для server-side rendering
 */
const RussianEstonianHome = () => {
  const currentCountry = 'et';
  const currentLocale = 'ru';

  return (
    <MainLayout currentCountry={currentCountry} currentLocale={currentLocale}>
      <section id="hero" className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {getTranslation(currentLocale, 'home.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {getTranslation(currentLocale, 'home.description')}
          </p>
        </div>
      </section>

      <section id="loans" className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {getTranslation(currentLocale, 'credits.title')}
          </h2>
          
          <div className="text-center">
            <p className="text-lg mb-6">
              {getTranslation(currentLocale, 'credits.compare')}
            </p>
            <Link to="/et-ru/kredity" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              {getTranslation(currentLocale, 'nav.credits')}
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {getTranslation(currentLocale, 'about.title')}
          </h2>
          <p className="text-lg mb-6">
            {getTranslation(currentLocale, 'about.mission')}
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default RussianEstonianHome;
