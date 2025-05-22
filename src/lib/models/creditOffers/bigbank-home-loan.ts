
import { CreditOffer } from './index';

export const bigbankHomeLoan: CreditOffer = {
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
};
