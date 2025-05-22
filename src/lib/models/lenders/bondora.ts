
import { Lender } from './index';

export const bondora: Lender = {
  id: 'bondora',
  name: 'Bondora',
  logo: '/placeholder.svg',
  website: 'https://www.bondora.ee',
  countries: ['et'],
  establishedYear: 2008,
  license: 'Estonian Financial Supervision Authority',
  description: {
    'et': 'Bondora pakub P2P laene ja investeerimisvõimalusi.',
    'ru': 'Bondora предлагает P2P кредиты и возможности для инвестиций.',
    'en': 'Bondora offers P2P loans and investment opportunities.'
  },
  creditOffers: [
    {
      id: 'bondora-consumer',
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
      }
    }
  ]
};
