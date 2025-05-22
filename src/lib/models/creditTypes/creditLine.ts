
import { CreditTypeInfo } from './index';

export const creditLine: CreditTypeInfo = {
  id: 'credit_line',
  names: {
    'et': 'Krediidikonto',
    'ru': 'Кредитная линия',
    'en': 'Credit Line'
  },
  descriptions: {
    'et': 'Krediidikonto on paindlik laenutoode, mis võimaldab kasutada raha vastavalt vajadusele kuni kokkulepitud limiidini.',
    'ru': 'Кредитная линия - это гибкий кредитный продукт, который позволяет использовать деньги по мере необходимости до согласованного лимита.',
    'en': 'A credit line is a flexible loan product that allows you to use money as needed up to an agreed limit.'
  },
  suitableFor: {
    'et': [
      'Kui vajate paindlikku juurdepääsu rahale',
      'Korduvateks kulutusteks',
      'Ootamatute kulude katmiseks'
    ],
    'ru': [
      'Когда вам нужен гибкий доступ к деньгам',
      'Для повторяющихся расходов',
      'Для покрытия непредвиденных расходов'
    ],
    'en': [
      'When you need flexible access to money',
      'For recurring expenses',
      'Covering unexpected costs'
    ]
  },
  advantages: {
    'et': [
      'Maksate intresse ainult kasutatud summa eest',
      'Saate raha uuesti kasutada pärast tagasimaksmist',
      'Paindlik tagasimakse'
    ],
    'ru': [
      'Вы платите проценты только за использованную сумму',
      'Можно повторно использовать деньги после погашения',
      'Гибкое погашение'
    ],
    'en': [
      'You pay interest only on the amount used',
      'You can reuse money after repayment',
      'Flexible repayment'
    ]
  },
  disadvantages: {
    'et': [
      'Võib viia ülelaenamise riskini',
      'Sageli kõrgemad intressid kui tarbimislaenul',
      'Võib olla keeruline jälgida'
    ],
    'ru': [
      'Может привести к риску чрезмерного заимствования',
      'Часто более высокие проценты, чем у потребительского кредита',
      'Может быть сложно отслеживать'
    ],
    'en': [
      'May lead to over-borrowing risk',
      'Often higher interest rates than consumer loans',
      'Can be difficult to track'
    ]
  },
  relatedTypes: ['quick_loan']
};
