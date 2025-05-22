import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { getTranslation } from '@/lib/i18n/translations';
import { getCreditOffersByCountry, getLendersForCountry } from '@/lib/models/lenders';
import { creditTypeNames } from '@/lib/models/creditTypes';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/**
 * Страница кредитных предложений для эстонской версии сайта
 * Оптимизирована для server-side rendering
 */
const EstonianCredits = () => {
  const currentCountry = 'et';
  const currentLocale = 'et';
  
  // Получаем кредитные предложения для Эстонии
  const creditOffers = getCreditOffersByCountry(currentCountry);
  
  // Получаем кредиторов для Эстонии
  const lenders = getLendersForCountry(currentCountry);

  return (
    <MainLayout currentCountry={currentCountry} currentLocale={currentLocale}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {getTranslation(currentLocale, 'credits.title')}
        </h1>
        
        <div className="mb-10">
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
            {getTranslation(currentLocale, 'credits.compare')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creditOffers.map(offer => {
            const lender = lenders.find(l => l.id === offer.lenderId);
            return (
              <Card key={offer.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-10 w-10 bg-slate-200 rounded-md flex items-center justify-center">
                      {lender?.name.charAt(0) || 'L'}
                    </div>
                    <Badge>{creditTypeNames[currentLocale][offer.creditType]}</Badge>
                  </div>
                  <CardTitle className="text-xl">{lender?.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{getTranslation(currentLocale, 'filter.amount')}</span>
                      <span className="font-medium">{offer.minAmount} - {offer.maxAmount} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{getTranslation(currentLocale, 'filter.term')}</span>
                      <span className="font-medium">{offer.minTerm} - {offer.maxTerm} {currentLocale === 'et' ? 'kuud' : 'months'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{getTranslation(currentLocale, 'filter.rate')}</span>
                      <span className="font-medium">{offer.interestRate.min}% - {offer.interestRate.max}%</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline">
                    {getTranslation(currentLocale, 'loan.details')}
                  </Button>
                  <Button>
                    {getTranslation(currentLocale, 'loan.apply')}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default EstonianCredits;
