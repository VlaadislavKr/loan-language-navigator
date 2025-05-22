
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import CountryCard from '@/components/features/CountryCard';
import { countries } from '@/lib/i18n/config';

/**
 * Главная страница англоязычной версии сайта
 * Содержит описание проекта и список доступных стран
 */
const Index = () => {
  return (
    <MainLayout>
      <section id="hero" className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Payday Loan Help - Free Advice
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Compare loan offers from different countries and find the best financial solution for your needs. 
            Independent advice and comprehensive comparisons in multiple languages.
          </p>
        </div>
      </section>

      <section id="countries" className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Available Countries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CountryCard
              countryCode="et"
              name="Estonia"
              flag="🇪🇪"
              availableLocales={countries.et.locales}
              description="Compare Estonian loans in Estonian and Russian languages. Find the best interest rates and loan conditions."
            />
            
            <CountryCard
              countryCode="lt"
              name="Lithuania"
              flag="🇱🇹"
              availableLocales={countries.lt.locales}
              description="Compare Lithuanian loans in Lithuanian language. Discover the most favorable credit offers."
            />
            
            <CountryCard
              countryCode="fi"
              name="Finland"
              flag="🇫🇮"
              availableLocales={countries.fi.locales}
              description="Compare Finnish loans in Finnish language. Find the best loan offers with lowest interest rates."
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About 44Finance</h2>
          <p className="text-lg mb-6">
            44Finance provides independent loan comparison services across multiple countries. 
            Our mission is to help people make informed financial decisions by presenting 
            comprehensive and unbiased information about available credit options.
          </p>
          <p className="text-lg">
            We analyze and compare hundreds of loan offers to help you find the most suitable 
            financial solutions based on your specific needs and circumstances.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
