
// Интерфейс для кредиторов
export interface Lender {
  id: string;
  name: string;
  logo: string;
  website: string;
  countries: string[]; // Коды стран, где доступен кредитор
  establishedYear: number;
  license?: string;
  description: Record<string, string>; // Локализованные описания
}

// Список кредиторов
export const lenders: Lender[] = [
  {
    id: 'ferratum',
    name: 'Ferratum',
    logo: '/placeholder.svg', // Placeholder для логотипа
    website: 'https://www.ferratum.ee',
    countries: ['et'],
    establishedYear: 2005,
    license: 'Estonian Financial Supervision Authority',
    description: {
      'et': 'Ferratum pakub kiirlaene ja tarbimislaene Eestis.',
      'ru': 'Ferratum предлагает быстрые кредиты и потребительские кредиты в Эстонии.',
      'en': 'Ferratum offers quick loans and consumer loans in Estonia.'
    }
  },
  {
    id: 'bondora',
    name: 'Bondora',
    logo: '/placeholder.svg', // Placeholder для логотипа
    website: 'https://www.bondora.ee',
    countries: ['et'],
    establishedYear: 2008,
    license: 'Estonian Financial Supervision Authority',
    description: {
      'et': 'Bondora pakub P2P laene ja investeerimisvõimalusi.',
      'ru': 'Bondora предлагает P2P кредиты и возможности для инвестиций.',
      'en': 'Bondora offers P2P loans and investment opportunities.'
    }
  },
  {
    id: 'credit24',
    name: 'Credit24',
    logo: '/placeholder.svg', // Placeholder для логотипа
    website: 'https://www.credit24.ee',
    countries: ['et'],
    establishedYear: 2006,
    license: 'Estonian Financial Supervision Authority',
    description: {
      'et': 'Credit24 pakub paindlikke laenulahendusi ja krediidiliine.',
      'ru': 'Credit24 предлагает гибкие кредитные решения и кредитные линии.',
      'en': 'Credit24 offers flexible loan solutions and credit lines.'
    }
  },
  {
    id: 'bigbank',
    name: 'Bigbank',
    logo: '/placeholder.svg', // Placeholder для логотипа
    website: 'https://www.bigbank.ee',
    countries: ['et', 'lt', 'fi'],
    establishedYear: 1992,
    license: 'European Banking License',
    description: {
      'et': 'Bigbank pakub tarbimislaene, kodulaene ja hoiuseid.',
      'ru': 'Bigbank предлагает потребительские кредиты, жилищные кредиты и депозиты.',
      'en': 'Bigbank offers consumer loans, home loans, and deposits.'
    }
  }
];

// Функция для получения кредиторов для определенной страны
export function getLendersForCountry(countryCode: string): Lender[] {
  return lenders.filter(lender => lender.countries.includes(countryCode));
}

// Функция для получения кредитора по ID
export function getLenderById(id: string): Lender | undefined {
  return lenders.find(lender => lender.id === id);
}
