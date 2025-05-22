
import { CreditTypeInfo } from './index';

export const refinancing: CreditTypeInfo = {
  id: 'refinancing',
  names: {
    'et': 'Refinantseerimine',
    'ru': 'Рефинансирование',
    'en': 'Refinancing'
  },
  descriptions: {
    'et': 'Refinantseerimine tähendab olemasoleva laenu asendamist uue, tavaliselt soodsamate tingimustega laenuga.',
    'ru': 'Рефинансирование означает замену существующего кредита новым, обычно с более выгодными условиями.',
    'en': 'Refinancing means replacing an existing loan with a new one, usually with more favorable terms.'
  },
  suitableFor: {
    'et': [
      'Kui turuintressimäärad on langenud',
      'Mitme laenu ühendamiseks',
      'Igakuiste maksete vähendamiseks'
    ],
    'ru': [
      'Когда рыночные процентные ставки снизились',
      'Для объединения нескольких кредитов',
      'Для уменьшения ежемесячных платежей'
    ],
    'en': [
      'When market interest rates have fallen',
      'Consolidating multiple loans',
      'Reducing monthly payments'
    ]
  },
  advantages: {
    'et': [
      'Potentsiaalselt madalam intressimäär',
      'Lihtsustatud laenuhaldus mitme laenu ühendamisel',
      'Võimalus vähendada igakuiseid makseid'
    ],
    'ru': [
      'Потенциально более низкая процентная ставка',
      'Упрощенное управление кредитом при объединении нескольких кредитов',
      'Возможность уменьшить ежемесячные платежи'
    ],
    'en': [
      'Potentially lower interest rate',
      'Simplified loan management when consolidating multiple loans',
      'Opportunity to reduce monthly payments'
    ]
  },
  disadvantages: {
    'et': [
      'Võib sisaldada lisakulusid ja tasusid',
      'Pikendatud tagasimakseperiood võib tähendada kogukulude suurenemist',
      'Nõuab uut krediidikontrolli'
    ],
    'ru': [
      'Может включать дополнительные расходы и комиссии',
      'Продленный период погашения может означать увеличение общих расходов',
      'Требует новой проверки кредитоспособности'
    ],
    'en': [
      'May include additional costs and fees',
      'Extended repayment period may mean increased total costs',
      'Requires a new credit check'
    ]
  },
  relatedTypes: ['consumer_loan', 'home_loan']
};
