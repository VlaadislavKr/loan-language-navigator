
import { CreditTypeInfo } from './index';

export const carLoan: CreditTypeInfo = {
  id: 'car_loan',
  names: {
    'et': 'Autolaen',
    'ru': 'Автокредит',
    'en': 'Car Loan'
  },
  descriptions: {
    'et': 'Autolaen on spetsiaalne laen sõiduki ostmiseks, kus ostetav auto on tavaliselt laenu tagatiseks.',
    'ru': 'Автокредит - это специальный кредит для покупки транспортного средства, где приобретаемый автомобиль обычно является залогом по кредиту.',
    'en': 'A car loan is a special loan for purchasing a vehicle, where the purchased car usually serves as collateral for the loan.'
  },
  suitableFor: {
    'et': [
      'Auto ostmiseks',
      'Muu sõiduki ostmiseks',
      'Kui soovite sõiduki kulusid aja jooksul jaotada'
    ],
    'ru': [
      'Для покупки автомобиля',
      'Для покупки другого транспортного средства',
      'Когда вы хотите распределить расходы на транспортное средство с течением времени'
    ],
    'en': [
      'Buying a car',
      'Purchasing other vehicles',
      'When you want to spread vehicle expenses over time'
    ]
  },
  advantages: {
    'et': [
      'Madalam intressimäär võrreldes tagatiseta laenudega',
      'Spetsiaalsed tingimused autode jaoks',
      'Võib sisaldada kindlustuspakette'
    ],
    'ru': [
      'Более низкая процентная ставка по сравнению с необеспеченными кредитами',
      'Специальные условия для автомобилей',
      'Может включать страховые пакеты'
    ],
    'en': [
      'Lower interest rate compared to unsecured loans',
      'Special terms for cars',
      'May include insurance packages'
    ]
  },
  disadvantages: {
    'et': [
      'Auto on tagatiseks ja võidakse ära võtta makseviivituse korral',
      'Võib nõuda omafinantseeringut',
      'Kohustuslik kaskokindlustus'
    ],
    'ru': [
      'Автомобиль является залогом и может быть изъят в случае просрочки платежа',
      'Может потребоваться первоначальный взнос',
      'Обязательное полное страхование'
    ],
    'en': [
      'The car is collateral and can be repossessed in case of payment default',
      'May require a down payment',
      'Mandatory comprehensive insurance'
    ]
  },
  relatedTypes: ['consumer_loan']
};
