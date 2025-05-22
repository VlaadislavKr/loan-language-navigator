
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LocaleCode, locales, getLocalizedUrl } from '@/lib/i18n/config';

interface CountryCardProps {
  countryCode: string;
  name: string;
  flag: string;
  availableLocales: LocaleCode[];
  description: string;
}

/**
 * Компонент карточки страны
 * Отображает информацию о стране и доступных языках
 */
const CountryCard: React.FC<CountryCardProps> = ({
  countryCode,
  name,
  flag,
  availableLocales,
  description
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <span className="text-3xl">{flag}</span>
          <span>{name}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {availableLocales.map((locale) => (
            <Badge key={locale} variant="secondary">
              {locales[locale]}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          {availableLocales.map((locale) => (
            <Link key={locale} to={getLocalizedUrl(countryCode, locale)}>
              <Button variant="outline" size="sm">
                {locale === 'en' ? 'EN' : 
                 locale === 'et' ? 'ET' : 
                 locale === 'ru' ? 'RU' : 
                 locale === 'lt' ? 'LT' : 'FI'}
              </Button>
            </Link>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CountryCard;
