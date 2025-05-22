import { LocaleCode } from '../i18n/config';

/**
 * Интерфейс для метаданных страницы
 */
export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  hreflang?: Record<string, string>;
  ogImage?: string;
  jsonLd?: Record<string, any>;
}

/**
 * Тип для хранилища всех метаданных сайта
 */
export type SiteMetadata = Record<string, Record<LocaleCode, PageMeta>>;

/**
 * Хранилище всех метаданных сайта
 * Ключи первого уровня - пути страниц без локали (например, "credits", "about")
 * Ключи второго уровня - коды локалей (например, "en", "et", "ru")
 */
export const siteMetadata: SiteMetadata = {
  // Метаданные для главной страницы
  "home": {
    "en": {
      title: "44Finance - Payday Loan Help and Free Advice",
      description: "Compare loan offers from different countries and find the best financial solution for your needs.",
      canonical: "https://44finance.com"
    },
    "et": {
      title: "44Finance - Kiirlaenu Abi ja Tasuta Nõustamine",
      description: "Võrdle laenupakkumisi erinevatest pankadest ja leia parim finantseerimislahendus oma vajadustele.",
      canonical: "https://44finance.com/et"
    },
    "ru": {
      title: "44Finance - Помощь с Кредитами в Эстонии",
      description: "Сравните кредитные предложения от разных банков и найдите лучшее финансовое решение для ваших потребностей.",
      canonical: "https://44finance.com/et-ru"
    },
    "lt": {
      title: "44Finance - Greitos Paskolos Pagalba",
      description: "Palyginkite paskolų pasiūlymus iš skirtingų šaltinių ir raskite geriausią finansinį sprendimą.",
      canonical: "https://44finance.com/lt"
    },
    "fi": {
      title: "44Finance - Pikavippi Apu ja Ilmainen Neuvonta",
      description: "Vertaa lainatarjouksia eri pankeista ja löydä paras rahoitusratkaisu tarpeisiisi.",
      canonical: "https://44finance.com/fi"
    }
  },

  // Метаданные для страницы кредитов
  "credits": {
    "en": {
      title: "Compare Loans - 44Finance",
      description: "Compare loans from different lenders and find the best option for your needs. Apply online.",
      canonical: "https://44finance.com/credits"
    },
    "et": {
      title: "Võrdle Laene - 44Finance",
      description: "Võrdle laenupakkumisi erinevatelt pankadelt ja leia parim lahendus. Taotleda saab internetis.",
      canonical: "https://44finance.com/et/laenud"
    },
    "ru": {
      title: "Сравнение Кредитов в Эстонии - 44Finance",
      description: "Сравните кредитные предложения от разных банков и найдите лучший вариант. Заявка онлайн.",
      canonical: "https://44finance.com/et-ru/kredity"
    },
    "lt": {
      title: "Palyginti Paskolas - 44Finance",
      description: "Palyginkite paskolas iš įvairių skolintojų ir raskite geriausią pasiūlymą. Kreipkitės internetu.",
      canonical: "https://44finance.com/lt/paskolos"
    },
    "fi": {
      title: "Vertaa Lainoja - 44Finance",
      description: "Vertaa lainoja eri lainanantajilta ja löydä paras vaihtoehto. Hae verkossa.",
      canonical: "https://44finance.com/fi/laina"
    }
  },

  // Метаданные для страницы о нас
  "about": {
    "en": {
      title: "About Us - 44Finance",
      description: "Learn more about 44Finance and our mission to help people find the best financial solutions.",
      canonical: "https://44finance.com/about"
    },
    "et": {
      title: "Meist - 44Finance",
      description: "Loe lähemalt 44Finance kohta ja meie missioonist aidata inimestel leida parimad finantslahendused.",
      canonical: "https://44finance.com/et/meist"
    },
    "ru": {
      title: "О Нас - 44Finance",
      description: "Узнайте больше о 44Finance и нашей миссии помочь людям найти лучшие финансовые решения.",
      canonical: "https://44finance.com/et-ru/o-nas"
    },
    "lt": {
      title: "Apie Mus - 44Finance",
      description: "Sužinokite daugiau apie 44Finance ir mūsų misiją padėti žmonėms rasti geriausius finansinius sprendimus.",
      canonical: "https://44finance.com/lt/apie-mus"
    },
    "fi": {
      title: "Meistä - 44Finance",
      description: "Lue lisää 44Finance-palvelusta ja missiostamme auttaa ihmisiä löytämään parhaat rahoitusratkaisut.",
      canonical: "https://44finance.com/fi/keita-me-olemme"
    }
  },

  // Метаданные для страницы конфиденциальности
  "privacy": {
    "en": {
      title: "Privacy Policy - 44Finance",
      description: "Read our privacy policy to understand how we collect, use and protect your personal data.",
      canonical: "https://44finance.com/privacy"
    },
    "et": {
      title: "Privaatsuspoliitika - 44Finance",
      description: "Loe meie privaatsuspoliitikat, et mõista kuidas me kogume, kasutame ja kaitseme sinu isikuandmeid.",
      canonical: "https://44finance.com/et/privaatsus"
    },
    "ru": {
      title: "Политика Конфиденциальности - 44Finance",
      description: "Ознакомьтесь с нашей политикой конфиденциальности, чтобы понять, как мы собираем, используем и защищаем ваши личные данные.",
      canonical: "https://44finance.com/et-ru/konfidentsialnost"
    },
    "lt": {
      title: "Privatumo Politika - 44Finance",
      description: "Perskaitykite mūsų privatumo politiką, kad suprastumėte, kaip renkame, naudojame ir saugome jūsų asmeninius duomenis.",
      canonical: "https://44finance.com/lt/privatumas"
    },
    "fi": {
      title: "Tietosuojakäytäntö - 44Finance",
      description: "Lue tietosuojakäytäntömme ymmärtääksesi, miten keräämme, käytämme ja suojaamme henkilötietojasi.",
      canonical: "https://44finance.com/fi/yksityisyys"
    }
  }
};

/**
 * Получение метаданных для указанной страницы и локали
 * @param page - ключ страницы (например, "home", "credits")
 * @param locale - код локали (например, "en", "et")
 */
export function getPageMetadata(page: string = 'home', locale: LocaleCode = 'en'): PageMeta | undefined {
  if (!siteMetadata[page]) {
    return undefined;
  }
  
  return siteMetadata[page][locale];
}

/**
 * Генерация hreflang связей для страницы
 * @param country - код страны (например, "et", "lt")
 * @param page - ключ страницы (например, "home", "credits")
 */
export function generateHreflangLinks(country: string, page: string = 'home'): Record<string, string> {
  const links: Record<string, string> = {};
  
  if (country === 'global') {
    // Для глобальной версии только ссылка на английский язык
    links['x-default'] = `https://44finance.com${page === 'home' ? '' : `/${page}`}`;
    return links;
  }
  
  // Для страниц одной страны - связываем разные языки
  const pageKey = page === '' ? 'home' : page;
  
  if (country === 'et') {
    // Для Эстонии у нас два языка: эстонский и русский
    links['et-EE'] = `https://44finance.com/et${page === 'home' ? '' : `/${siteMetadata[pageKey]?.['et']?.canonical?.split('/').pop() || page}`}`;
    links['ru-EE'] = `https://44finance.com/et-ru${page === 'home' ? '' : `/${siteMetadata[pageKey]?.['ru']?.canonical?.split('/').pop() || page}`}`;
  } else if (country === 'lt') {
    links['lt-LT'] = `https://44finance.com/lt${page === 'home' ? '' : `/${siteMetadata[pageKey]?.['lt']?.canonical?.split('/').pop() || page}`}`;
  } else if (country === 'fi') {
    links['fi-FI'] = `https://44finance.com/fi${page === 'home' ? '' : `/${siteMetadata[pageKey]?.['fi']?.canonical?.split('/').pop() || page}`}`;
  }
  
  return links;
}

/**
 * Генерация данных JSON-LD для структурированных данных
 * @param type - тип данных (например, "WebPage", "Organization")
 * @param data - дополнительные данные
 */
export function generateJsonLd(type: string, data: Record<string, any> = {}): Record<string, any> {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  };
  
  return { ...baseData, ...data };
}

/**
 * Получение абсолютного URL на основе относительного пути
 * Полезно для формирования корректных канонических URL в SSR
 * @param path - относительный путь
 */
export function getAbsoluteUrl(path: string): string {
  const baseUrl = 'https://44finance.com';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Создание базовых метаданных для страницы с учетом текущего URL
 * @param title - заголовок страницы
 * @param description - описание страницы
 * @param path - относительный путь
 * @param locale - код локали
 */
export function createBasicMetadata(
  title: string,
  description: string,
  path: string,
  locale: LocaleCode = 'en'
): PageMeta {
  return {
    title,
    description,
    canonical: getAbsoluteUrl(path),
    // Остальные поля будут добавлены при необходимости
  };
}
