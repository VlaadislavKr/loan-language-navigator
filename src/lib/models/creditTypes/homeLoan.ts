
import { CreditTypeInfo } from './index';

export const homeLoan: CreditTypeInfo = {
  id: 'home_loan',
  names: {
    'et': 'Kodulaen',
    'ru': 'Жилищный кредит',
    'en': 'Home Loan'
  },
  descriptions: {
    'et': 'Kodulaen on pikaajaline laen eluaseme ostmiseks, ehitamiseks või renoveerimiseks, mille tagatiseks on tavaliselt ostetav kinnisvara.',
    'ru': 'Жилищный кредит - это долгосрочный кредит для покупки, строительства или реновации жилья, обычно обеспеченный приобретаемой недвижимостью.',
    'en': 'A home loan is a long-term loan for buying, building, or renovating housing, usually secured by the property being purchased.'
  },
  suitableFor: {
    'et': [
      'Kodu ostmiseks',
      'Eluaseme ehitamiseks',
      'Ulatusliku renoveerimise jaoks'
    ],
    'ru': [
      'Для покупки дома',
      'Для строительства жилья',
      'Для масштабной реновации'
    ],
    'en': [
      'Buying a home',
      'Building housing',
      'Extensive renovation'
    ]
  },
  advantages: {
    'et': [
      'Madalaim intressimäär kõigist laenudest',
      'Väga pikk tagasimakseperiood (kuni 30 aastat)',
      'Suured laenusummad'
    ],
    'ru': [
      'Самая низкая процентная ставка из всех кредитов',
      'Очень длительный период погашения (до 30 лет)',
      'Крупные суммы кредита'
    ],
    'en': [
      'Lowest interest rate of all loans',
      'Very long repayment period (up to 30 years)',
      'Large loan amounts'
    ]
  },
  disadvantages: {
    'et': [
      'Keeruline taotlusprotsess',
      'Nõuab kinnisvara tagatiseks',
      'Vajab tavaliselt omafinantseeringut'
    ],
    'ru': [
      'Сложный процесс подачи заявки',
      'Требует недвижимость в качестве залога',
      'Обычно требуется первоначальный взнос'
    ],
    'en': [
      'Complex application process',
      'Requires property as collateral',
      'Usually needs a down payment'
    ]
  },
  relatedTypes: ['refinancing']
};
