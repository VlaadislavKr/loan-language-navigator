
import { CreditTypeInfo } from './index';

export const smallLoan: CreditTypeInfo = {
  id: 'small_loan',
  names: {
    'et': 'Väikelaen',
    'ru': 'Малый кредит',
    'en': 'Small Loan'
  },
  descriptions: {
    'et': 'Väikelaen on mõeldud väiksemate summade laenamiseks keskmise pikkusega perioodiks, pakkudes tasakaalu kiirlaenu ja tarbimislaenu vahel.',
    'ru': 'Малый кредит предназначен для заимствования небольших сумм на средний период времени, предлагая баланс между быстрым кредитом и потребительским кредитом.',
    'en': 'A small loan is designed for borrowing smaller amounts for a medium-length period, offering a balance between a quick loan and a consumer loan.'
  },
  suitableFor: {
    'et': [
      'Väiksemate ostude tegemiseks',
      'Väiksemate koduremondi projektide jaoks',
      'Kui vajate mõõdukat summat keskmiseks perioodiks'
    ],
    'ru': [
      'Для совершения небольших покупок',
      'Для небольших проектов по ремонту дома',
      'Когда вам нужна умеренная сумма на средний период'
    ],
    'en': [
      'Making smaller purchases',
      'Small home repair projects',
      'When you need a moderate amount for a medium period'
    ]
  },
  advantages: {
    'et': [
      'Keskmine intressimäär',
      'Kiire taotlusprotsess',
      'Paindlikumad tingimused kui kiirlaenul'
    ],
    'ru': [
      'Средняя процентная ставка',
      'Быстрый процесс подачи заявки',
      'Более гибкие условия, чем у быстрого кредита'
    ],
    'en': [
      'Average interest rate',
      'Fast application process',
      'More flexible terms than quick loans'
    ]
  },
  disadvantages: {
    'et': [
      'Piiratud summa',
      'Võib olla kallim kui tarbimislaen',
      'Vähem paindlik kui krediidikonto'
    ],
    'ru': [
      'Ограниченная сумма',
      'Может быть дороже потребительского кредита',
      'Менее гибкий, чем кредитная линия'
    ],
    'en': [
      'Limited amount',
      'May be more expensive than a consumer loan',
      'Less flexible than a credit line'
    ]
  },
  relatedTypes: ['quick_loan', 'consumer_loan']
};
