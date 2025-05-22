
import { Lender } from './index';

export const ferratum: Lender = {
  id: 'ferratum',
  name: 'Ferratum',
  logo: '/placeholder.svg',
  website: 'https://www.ferratum.ee',
  countries: ['et'],
  establishedYear: 2005,
  license: 'Estonian Financial Supervision Authority',
  description: {
    'et': 'Ferratum pakub kiirlaene ja tarbimislaene Eestis.',
    'ru': 'Ferratum предлагает быстрые кредиты и потребительские кредиты в Эстонии.',
    'en': 'Ferratum offers quick loans and consumer loans in Estonia.'
  },
  creditOffers: [
    {
      id: 'ferratum-quick',
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
      }
    }
  ]
};
