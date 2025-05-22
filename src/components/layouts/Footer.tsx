
import React from 'react';
import { Link } from 'react-router-dom';
import { LocaleCode, getLocalizedUrl } from '@/lib/i18n/config';
import { getTranslation } from '@/lib/i18n/translations';

interface FooterProps {
  currentCountry?: string;
  currentLocale?: LocaleCode;
}

/**
 * Компонент подвала сайта
 * Отображает навигацию, копирайт и ссылку на политику конфиденциальности
 * Оптимизирован для server-side rendering
 */
const Footer = ({ 
  currentCountry = 'global', 
  currentLocale = 'en' 
}: FooterProps) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {year} 44Finance. {getTranslation(currentLocale, 'footer.rights')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            <Link 
              to={getLocalizedUrl(currentCountry, currentLocale, 'privacy')} 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {getTranslation(currentLocale, 'privacy.title')}
            </Link>
            {currentCountry !== 'global' && (
              <Link 
                to={getLocalizedUrl(currentCountry, currentLocale, 'about')} 
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {getTranslation(currentLocale, 'about.title')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
