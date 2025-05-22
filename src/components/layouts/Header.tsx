
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LocaleCode, countries, getLocalizedUrl } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '../features/LanguageSwitcher';
import { getTranslation } from '@/lib/i18n/translations';

interface HeaderProps {
  currentCountry?: string;
  currentLocale?: LocaleCode;
  className?: string;
}

/**
 * Компонент заголовка сайта
 * Отображает логотип, навигационное меню и переключатель языков
 * Оптимизирован для server-side rendering
 */
const Header = ({ 
  currentCountry = 'global', 
  currentLocale = 'en',
  className
}: HeaderProps) => {
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
              {getTranslation(currentLocale, 'nav.credits')}
            </Link>
          )}
          <Link 
            to={getLocalizedUrl(currentCountry, currentLocale, 'about')} 
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            {getTranslation(currentLocale, 'nav.about')}
          </Link>
          <Link 
            to={getLocalizedUrl(currentCountry, currentLocale, 'privacy')} 
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            {getTranslation(currentLocale, 'nav.privacy')}
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <LanguageSwitcher 
            currentCountry={currentCountry}
            currentLocale={currentLocale}
          />
          
          <Button variant="outline" size="sm">
            {countries[currentCountry].flag} {countries[currentCountry].name}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
