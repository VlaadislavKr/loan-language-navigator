
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LocaleCode, countries, getLocalizedUrl } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  currentCountry: string;
  currentLocale: LocaleCode;
}

/**
 * Компонент для переключения языков
 * Отображает кнопки для доступных языков текущей страны
 * Оптимизирован для server-side rendering
 */
const LanguageSwitcher = ({
  currentCountry,
  currentLocale
}: LanguageSwitcherProps) => {
  // Получаем доступные языки для текущей страны
  const availableLocales = countries[currentCountry]?.locales || ['en'];
  
  // Если доступен только один язык, не показываем переключатель
  if (availableLocales.length <= 1) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      {availableLocales.map((locale) => (
        <Link 
          key={locale} 
          to={getLocalizedUrl(currentCountry, locale)}
        >
          <Button 
            variant={locale === currentLocale ? "default" : "outline"} 
            size="sm"
          >
            {locale === 'en' ? 'EN' : 
             locale === 'et' ? 'ET' : 
             locale === 'ru' ? 'RU' : 
             locale === 'lt' ? 'LT' : 'FI'}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
