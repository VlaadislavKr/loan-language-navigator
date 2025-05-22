
import { CreditTypeInfo } from './index';

export const consumerLoan: CreditTypeInfo = {
  id: 'consumer_loan',
  names: {
    'et': 'Tarbimislaen',
    'ru': 'Потребительский кредит',
    'en': 'Consumer Loan'
  },
  descriptions: {
    'et': 'Tarbimislaen on mõeldud suuremate ostude või projektide finantseerimiseks, nagu koduelektroonika, remont või puhkus.',
    'ru': 'Потребительский кредит предназначен для финансирования более крупных покупок или проектов, таких как бытовая электроника, ремонт или отпуск.',
    'en': 'A consumer loan is designed to finance larger purchases or projects, such as home electronics, renovations, or vacations.'
  },
  suitableFor: {
    'et': [
      'Suuremate ostude tegemiseks',
      'Remondi või renoveerimise jaoks',
      'Pikaajaliste projektide finantseerimiseks'
    ],
    'ru': [
      'Для совершения крупных покупок',
      'Для ремонта или реновации',
      'Для финансирования долгосрочных проектов'
    ],
    'en': [
      'Making larger purchases',
      'Repairs or renovations',
      'Financing long-term projects'
    ]
  },
  advantages: {
    'et': [
      'Suuremad laenusummad kui kiirlaenul',
      'Madalamad intressid võrreldes kiirlaenuga',
      'Pikem tagasimakseperiood'
    ],
    'ru': [
      'Более крупные суммы кредита, чем у быстрых кредитов',
      'Более низкие проценты по сравнению с быстрыми кредитами',
      'Более длительный период погашения'
    ],
    'en': [
      'Larger loan amounts than quick loans',
      'Lower interest rates compared to quick loans',
      'Longer repayment period'
    ]
  },
  disadvantages: {
    'et': [
      'Rangem taotlusprotsess',
      'Võib nõuda täiendavaid dokumente',
      'Pikem otsustusprotsess'
    ],
    'ru': [
      'Более строгий процесс подачи заявки',
      'Может требовать дополнительных документов',
      'Более длительный процесс принятия решения'
    ],
    'en': [
      'Stricter application process',
      'May require additional documents',
      'Longer decision-making process'
    ]
  },
  relatedTypes: ['small_loan', 'refinancing']
};
