
import { Lender } from './index';

export const credit24: Lender = {
  id: 'credit24',
  name: 'Credit24',
  logo: '/placeholder.svg',
  website: 'https://www.credit24.ee',
  countries: ['et'],
  establishedYear: 2006,
  license: 'Estonian Financial Supervision Authority',
  description: {
    'et': 'Credit24 pakub paindlikke laenulahendusi ja krediidiliine.',
    'ru': 'Credit24 предлагает гибкие кредитные решения и кредитные линии.',
    'en': 'Credit24 offers flexible loan solutions and credit lines.'
  },
  creditOffers: [
    {
      id: 'credit24-credit-line',
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
      }
    }
  ]
};
