
import { CreditTypeInfo } from './index';

export const businessLoan: CreditTypeInfo = {
  id: 'business_loan',
  names: {
    'et': 'Ärilaen',
    'ru': 'Бизнес-кредит',
    'en': 'Business Loan'
  },
  descriptions: {
    'et': 'Ärilaen on ettevõtetele mõeldud finantseerimisviis, mis aitab katta ettevõtlusega seotud kulutusi, investeerida või laiendada tegevust.',
    'ru': 'Бизнес-кредит - это форма финансирования, предназначенная для компаний, которая помогает покрыть расходы, связанные с бизнесом, инвестировать или расширить деятельность.',
    'en': 'A business loan is a form of financing designed for companies that helps cover business-related expenses, invest, or expand operations.'
  },
  suitableFor: {
    'et': [
      'Ettevõtte alustamiseks',
      'Tegevuse laiendamiseks',
      'Äri likviidsuse parandamiseks'
    ],
    'ru': [
      'Для начала бизнеса',
      'Для расширения деятельности',
      'Для улучшения ликвидности бизнеса'
    ],
    'en': [
      'Starting a business',
      'Expanding operations',
      'Improving business liquidity'
    ]
  },
  advantages: {
    'et': [
      'Spetsiaalselt ettevõtete vajadustele kohandatud',
      'Võimalus finantseerida suuri äriprojekte',
      'Erinevad laenustruktuurid vastavalt ärivajadustele'
    ],
    'ru': [
      'Специально адаптированы для нужд компаний',
      'Возможность финансировать крупные бизнес-проекты',
      'Различные структуры кредита в соответствии с бизнес-потребностями'
    ],
    'en': [
      'Specially adapted to business needs',
      'Ability to finance large business projects',
      'Various loan structures according to business requirements'
    ]
  },
  disadvantages: {
    'et': [
      'Ranged kvalifitseerimisnõuded',
      'Võib nõuda isiklikke garantiisid',
      'Äriplaani ja finantsaruannete esitamise vajadus'
    ],
    'ru': [
      'Строгие квалификационные требования',
      'Может требовать личных гарантий',
      'Необходимость представления бизнес-плана и финансовых отчетов'
    ],
    'en': [
      'Strict qualification requirements',
      'May require personal guarantees',
      'Need to submit business plans and financial reports'
    ]
  },
  relatedTypes: ['consumer_loan']
};
