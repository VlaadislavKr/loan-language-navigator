
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LocaleCode, countries, getLocalizedUrl } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentCountry?: string;
  currentLocale?: LocaleCode;
  className?: string;
}

/**
 * Компонент заголовка сайта
 * Отображает логотип и навигационное меню
 */
const Header: React.FC<HeaderProps> = ({ 
  currentCountry = 'global', 
  currentLocale = 'en',
  className
}) => {
  return (
    <header className={cn("w-full border-b bg-background", className)}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to={getLocalizedUrl(currentCountry, currentLocale)} className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              44Finance
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {currentCountry !== 'global' && (
            <Link 
              to={getLocalizedUrl(currentCountry, currentLocale, 'credits')} 
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {currentLocale === 'en' ? 'Credits' : 
               currentLocale === 'et' ? 'Laenud' :
               currentLocale === 'ru' ? 'Кредиты' :
               currentLocale === 'lt' ? 'Paskolos' :
               'Laina'
              }
            </Link>
          )}
          <Link 
            to={getLocalizedUrl(currentCountry, currentLocale, 'about')} 
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            {currentLocale === 'en' ? 'About' : 
             currentLocale === 'et' ? 'Meist' :
             currentLocale === 'ru' ? 'О нас' :
             currentLocale === 'lt' ? 'Apie mus' :
             'Meistä'
            }
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            {countries[currentCountry].flag} {countries[currentCountry].name}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
