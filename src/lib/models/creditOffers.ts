
import { CreditType } from './creditTypes';

// Интерфейс для кредитных предложений
export interface CreditOffer {
  id: string;
  lenderId: string;
  creditType: CreditType;
  minAmount: number;
  maxAmount: number;
  minTerm: number; // в месяцах
  maxTerm: number; // в месяцах
  interestRate: {
    min: number;
    max: number;
    type: 'fixed' | 'variable';
  };
  annualPercentageRate: {
    min: number;
    max: number;
  };
  applicationFee: number;
  adminFee: number;
  earlyRepaymentFee: number;
  requirements: Record<string, string[]>; // Локализованные требования
  features: Record<string, string[]>; // Локализованные особенности
  countries: string[]; // Коды стран, где доступно предложение
}

// Список кредитных предложений для Эстонии
export const estonianCreditOffers: CreditOffer[] = [
  {
    id: 'ferratum-quick',
    lenderId: 'ferratum',
    creditType: 'quick_loan',
    minAmount: 100,
    maxAmount: 1000,
    minTerm: 1,
    maxTerm: 12,
    interestRate: {
      min: 49.9,
      max: 199.9,
      type: 'fixed'
    },
    annualPercentageRate: {
      min: 54.2,
      max: 214.7
    },
    applicationFee: 0,
    adminFee: 0,
    earlyRepaymentFee: 0,
    requirements: {
      'et': [
        'Vanus vähemalt 18 aastat',
        'Eesti residendi staatus',
        'Regulaarne sissetulek',
        'Kehtiv isikut tõendav dokument'
      ],
      'ru': [
        'Возраст не менее 18 лет',
        'Статус резидента Эстонии',
        'Регулярный доход',
        'Действующий документ, удостоверяющий личность'
      ],
      'en': [
        'Age at least 18 years',
        'Estonian resident status',
        'Regular income',
        'Valid ID document'
      ]
    },
    features: {
      'et': [
        'Raha mõne minutiga',
        'Taotlemine internetis või mobiilirakenduses',
        'Ilma tagatiseta',
        'Maksepuhkuse võimalus'
      ],
      'ru': [
        'Деньги за несколько минут',
        'Оформление онлайн или через мобильное приложение',
        'Без залога',
        'Возможность кредитных каникул'
      ],
      'en': [
        'Money in a few minutes',
        'Apply online or via mobile app',
        'No collateral required',
        'Option for payment holiday'
      ]
    },
    countries: ['et']
  },
  {
    id: 'credit24-credit-line',
    lenderId: 'credit24',
    creditType: 'credit_line',
    minAmount: 50,
    maxAmount: 5000,
    minTerm: 1,
    maxTerm: 36,
    interestRate: {
      min: 29.9,
      max: 59.9,
      type: 'fixed'
    },
    annualPercentageRate: {
      min: 34.1,
      max: 65.2
    },
    applicationFee: 0,
    adminFee: 5,
    earlyRepaymentFee: 0,
    requirements: {
      'et': [
        'Vanus vähemalt 21 aastat',
        'Eesti residendi staatus',
        'Regulaarne sissetulek',
        'Hea krediidiajalugu'
      ],
      'ru': [
        'Возраст не менее 21 года',
        'Статус резидента Эстонии',
        'Регулярный доход',
        'Хорошая кредитная история'
      ],
      'en': [
        'Age at least 21 years',
        'Estonian resident status',
        'Regular income',
        'Good credit history'
      ]
    },
    features: {
      'et': [
        'Paindlik krediidiliin',
        'Võta raha vastavalt vajadusele',
        'Maksa ainult kasutatud summa eest',
        'Online klienditeenindus 24/7'
      ],
      'ru': [
        'Гибкая кредитная линия',
        'Берите деньги по мере необходимости',
        'Платите только за использованную сумму',
        'Онлайн-поддержка клиентов 24/7'
      ],
      'en': [
        'Flexible credit line',
        'Take money as needed',
        'Pay only for the amount used',
        'Online customer support 24/7'
      ]
    },
    countries: ['et']
  },
  {
    id: 'bondora-consumer',
    lenderId: 'bondora',
    creditType: 'consumer_loan',
    minAmount: 500,
    maxAmount: 10000,
    minTerm: 3,
    maxTerm: 60,
    interestRate: {
      min: 9.9,
      max: 19.9,
      type: 'fixed'
    },
    annualPercentageRate: {
      min: 10.9,
      max: 21.7
    },
    applicationFee: 0,
    adminFee: 0,
    earlyRepaymentFee: 0,
    requirements: {
      'et': [
        'Vanus vähemalt 18 aastat',
        'Eesti residendi staatus',
        'Püsiv sissetulek',
        'Puuduvad aktiivsed maksehäired'
      ],
      'ru': [
        'Возраст не менее 18 лет',
        'Статус резидента Эстонии',
        'Постоянный доход',
        'Отсутствие активных просрочек по платежам'
      ],
      'en': [
        'Age at least 18 years',
        'Estonian resident status',
        'Stable income',
        'No active payment defaults'
      ]
    },
    features: {
      'et': [
        'Fikseeritud igakuine makse',
        'Kiire otsus ja väljamakse',
        'Ilma tagatiseta',
        'Ennetähtaegne tagasimakse ilma lisatasuta'
      ],
      'ru': [
        'Фиксированный ежемесячный платеж',
        'Быстрое решение и выплата',
        'Без залога',
        'Досрочное погашение без дополнительных комиссий'
      ],
      'en': [
        'Fixed monthly payment',
        'Quick decision and payout',
        'No collateral required',
        'Early repayment without additional fees'
      ]
    },
    countries: ['et']
  },
  {
    id: 'bigbank-home-loan',
    lenderId: 'bigbank',
    creditType: 'home_loan',
    minAmount: 10000,
    maxAmount: 500000,
    minTerm: 60,
    maxTerm: 360,
    interestRate: {
      min: 2.5,
      max: 4.5,
      type: 'variable'
    },
    annualPercentageRate: {
      min: 2.7,
      max: 4.8
    },
    applicationFee: 250,
    adminFee: 15,
    earlyRepaymentFee: 1,
    requirements: {
      'et': [
        'Vanus vähemalt 21 aastat',
        'Eesti residendi staatus',
        'Stabiilne sissetulek',
        'Kinnisvara tagatiseks',
        'Omafinantseering vähemalt 15%'
      ],
      'ru': [
        'Возраст не менее 21 года',
        'Статус резидента Эстонии',
        'Стабильный доход',
        'Недвижимость в качестве залога',
        'Самофинансирование не менее 15%'
      ],
      'en': [
        'Age at least 21 years',
        'Estonian resident status',
        'Stable income',
        'Real estate as collateral',
        'Self-financing at least 15%'
      ]
    },
    features: {
      'et': [
        'Konkurentsivõimeline intressimäär',
        'Pikk tagasimakseperiood',
        'Paindlikud tingimused',
        'Individuaalne lähenemine',
        'Maksepuhkuse võimalus'
      ],
      'ru': [
        'Конкурентоспособная процентная ставка',
        'Длительный период возврата',
        'Гибкие условия',
        'Индивидуальный подход',
        'Возможность кредитных каникул'
      ],
      'en': [
        'Competitive interest rate',
        'Long repayment period',
        'Flexible terms',
        'Individual approach',
        'Option for payment holiday'
      ]
    },
    countries: ['et']
  }
];

// Функция для получения предложений по стране
export function getCreditOffersByCountry(countryCode: string): CreditOffer[] {
  return estonianCreditOffers.filter(offer => offer.countries.includes(countryCode));
}

// Функция для получения предложений по типу кредита
export function getCreditOffersByType(countryCode: string, creditType: CreditType): CreditOffer[] {
  return getCreditOffersByCountry(countryCode).filter(offer => offer.creditType === creditType);
}

// Функция для получения предложения по ID
export function getCreditOfferById(id: string): CreditOffer | undefined {
  return estonianCreditOffers.find(offer => offer.id === id);
}
