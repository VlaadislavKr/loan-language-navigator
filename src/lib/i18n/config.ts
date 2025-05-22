
// Конфигурация для мультиязычности
export type LocaleCode = 'en' | 'et' | 'ru' | 'lt' | 'fi';

export const locales: Record<LocaleCode, string> = {
  'en': 'English',
  'et': 'Eesti',
  'ru': 'Русский',
  'lt': 'Lietuvių',
  'fi': 'Suomi'
};

export const countries: Record<string, {name: string, locales: LocaleCode[], flag: string}> = {
  'global': {
    name: 'Global',
    locales: ['en'],
    flag: '🌐'
  },
  'et': {
    name: 'Estonia',
    locales: ['et', 'ru'],
    flag: '🇪🇪'
  },
  'lt': {
    name: 'Lithuania',
    locales: ['lt'],
    flag: '🇱🇹'
  },
  'fi': {
    name: 'Finland',
    locales: ['fi'],
    flag: '🇫🇮'
  }
};

// URLs структура для разных языков
export const urlMappings: Record<string, Record<LocaleCode, string>> = {
  'credits': {
    'en': 'credits',
    'et': 'laenud',
    'ru': 'kredity',
    'lt': 'paskolos',
    'fi': 'laina'
  },
  'about': {
    'en': 'about',
    'et': 'meist',
    'ru': 'o-nas',
    'lt': 'apie-mus',
    'fi': 'keita-me-olemme'
  },
  'privacy': {
    'en': 'privacy',
    'et': 'privaatsus',
    'ru': 'konfidentsialnost',
    'lt': 'privatumas',
    'fi': 'yksityisyys'
  },
  'lenders': {
    'en': 'lenders',
    'et': 'laenupakkujad',
    'ru': 'kreditory',
    'lt': 'skolintojai',
    'fi': 'lainanantajat'
  },
  'faq': {
    'en': 'faq',
    'et': 'kkk',
    'ru': 'faq',
    'lt': 'duk',
    'fi': 'ukk'
  }
};

// URL формирование для разных языков и стран
export function getLocalizedUrl(
  country: string, 
  locale: LocaleCode, 
  page: string = '', 
  params: string = ''
): string {
  // Для глобальной версии на английском - без префикса
  if (country === 'global' && locale === 'en') {
    return page ? `/${page}${params ? `/${params}` : ''}` : '/';
  }
  
  // Для Эстонии на русском
  if (country === 'et' && locale === 'ru') {
    return `/${country}-${locale}${page ? `/${urlMappings[page]?.[locale] || page}` : ''}${params ? `/${params}` : ''}`;
  }
  
  // Для остальных стран
  return `/${country}${page ? `/${urlMappings[page]?.[locale] || page}` : ''}${params ? `/${params}` : ''}`;
}

// Формирование hreflang связей для страниц
export function getHreflangLinks(
  country: string, 
  currentLocale: LocaleCode, 
  page: string = '', 
  params: string = ''
): Record<string, string> {
  const links: Record<string, string> = {};
  
  // Только для страниц одной страны - связываем разные языки
  if (country !== 'global') {
    const countryData = countries[country];
    if (countryData) {
      countryData.locales.forEach(locale => {
        // Формируем код для hreflang
        const hreflangCode = country === 'et' && locale === 'ru' 
          ? 'ru-EE' 
          : `${locale}-${country.toUpperCase()}`;
          
        // Формируем URL для hreflang
        links[hreflangCode] = getLocalizedUrl(country, locale, page, params);
      });
    }
  }
  
  return links;
}
