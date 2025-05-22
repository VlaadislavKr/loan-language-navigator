
import { CreditTypeInfo } from './index';

export const quickLoan: CreditTypeInfo = {
  id: 'quick_loan',
  names: {
    'et': 'Kiirlaen',
    'ru': 'Быстрый кредит',
    'en': 'Quick Loan'
  },
  descriptions: {
    'et': 'Kiirlaen on lühiajaline laen väiksemate summade jaoks, mida saab kiiresti taotleda ja mis makstakse tavaliselt kiiresti välja.',
    'ru': 'Быстрый кредит – это краткосрочный кредит на небольшие суммы, который можно быстро оформить и который обычно быстро выплачивается.',
    'en': 'A quick loan is a short-term loan for smaller amounts that can be applied for quickly and is usually paid out quickly.'
  },
  suitableFor: {
    'et': [
      'Ootamatute kulutuste katmiseks',
      'Lühiajaliste finantsraskuste ületamiseks',
      'Kui vajate raha kiiresti'
    ],
    'ru': [
      'Для покрытия непредвиденных расходов',
      'Для преодоления краткосрочных финансовых трудностей',
      'Когда вам срочно нужны деньги'
    ],
    'en': [
      'Covering unexpected expenses',
      'Overcoming short-term financial difficulties',
      'When you need money quickly'
    ]
  },
  advantages: {
    'et': [
      'Kiire taotlusprotsess',
      'Raha saab kätte mõne minutiga',
      'Vähem dokumente võrreldes teiste laenudega'
    ],
    'ru': [
      'Быстрый процесс подачи заявки',
      'Деньги можно получить за несколько минут',
      'Меньше документов по сравнению с другими кредитами'
    ],
    'en': [
      'Fast application process',
      'Money can be received within minutes',
      'Fewer documents compared to other loans'
    ]
  },
  disadvantages: {
    'et': [
      'Kõrgem intressimäär',
      'Väiksemad summad',
      'Lühikesed tagasimaksetähtajad'
    ],
    'ru': [
      'Более высокая процентная ставка',
      'Меньшие суммы',
      'Короткие сроки погашения'
    ],
    'en': [
      'Higher interest rate',
      'Smaller amounts',
      'Short repayment periods'
    ]
  },
  relatedTypes: ['small_loan', 'credit_line']
};
