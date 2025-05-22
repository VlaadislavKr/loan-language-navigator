
import React from 'react';
import { Link } from 'react-router-dom';
import { LocaleCode, getLocalizedUrl } from '@/lib/i18n/config';

interface FooterProps {
  currentCountry?: string;
  currentLocale?: LocaleCode;
}

/**
 * Компонент подвала сайта
 * Отображает навигацию, копирайт и ссылку на политику конфиденциальности
 */
const Footer: React.FC<FooterProps> = ({ 
  currentCountry = 'global', 
  currentLocale = 'en' 
}) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {year} 44Finance. {currentLocale === 'en' ? 'All rights reserved.' : 
                                  currentLocale === 'et' ? 'Kõik õigused kaitstud.' :
                                  currentLocale === 'ru' ? 'Все права защищены.' :
                                  currentLocale === 'lt' ? 'Visos teisės saugomos.' :
                                  'Kaikki oikeudet pidätetään.'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            <Link 
              to={getLocalizedUrl(currentCountry, currentLocale, 'privacy')} 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {currentLocale === 'en' ? 'Privacy Policy' :
               currentLocale === 'et' ? 'Privaatsuspoliitika' :
               currentLocale === 'ru' ? 'Политика конфиденциальности' :
               currentLocale === 'lt' ? 'Privatumo politika' :
               'Tietosuojakäytäntö'}
            </Link>
            {currentCountry !== 'global' && (
              <Link 
                to={getLocalizedUrl(currentCountry, currentLocale, 'about')} 
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {currentLocale === 'en' ? 'About Us' : 
                 currentLocale === 'et' ? 'Meist' :
                 currentLocale === 'ru' ? 'О нас' :
                 currentLocale === 'lt' ? 'Apie mus' :
                 'Meistä'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
