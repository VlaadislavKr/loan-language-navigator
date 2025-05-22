
// Индексный файл, который экспортирует все типы кредитов
import { quickLoan } from './quickLoan';
import { consumerLoan } from './consumerLoan';
import { creditLine } from './creditLine';
import { smallLoan } from './smallLoan';
import { homeLoan } from './homeLoan';
import { carLoan } from './carLoan';
import { refinancing } from './refinancing';
import { businessLoan } from './businessLoan';

// Типы кредитных продуктов
export type CreditType = 
  | 'quick_loan'       // Быстрый кредит / Kiirlaen
  | 'consumer_loan'    // Потребительский кредит / Tarbimislaen
  | 'credit_line'      // Кредитная линия / Krediidikonto
  | 'small_loan'       // Малый кредит / Väikelaen
  | 'home_loan'        // Жилищный кредит / Kodulaen
  | 'car_loan'         // Автокредит / Autolaen
  | 'refinancing'      // Рефинансирование / Refinantseerimine
  | 'business_loan';   // Бизнес-кредит / Ärilaen

// Интерфейс для информации о типе кредита
export interface CreditTypeInfo {
  id: CreditType;
  names: Record<string, string>;
  descriptions: Record<string, string>;
  suitableFor?: Record<string, string[]>;
  advantages?: Record<string, string[]>;
  disadvantages?: Record<string, string[]>;
  relatedTypes?: CreditType[];
}

// Экспорт всех типов кредитов
export const creditTypes = {
  quick_loan: quickLoan,
  consumer_loan: consumerLoan,
  credit_line: creditLine,
  small_loan: smallLoan,
  home_loan: homeLoan,
  car_loan: carLoan,
  refinancing: refinancing,
  business_loan: businessLoan
};

// Локализованные названия типов кредитов
export const creditTypeNames: Record<string, Record<CreditType, string>> = {
  'et': {
    'quick_loan': quickLoan.names.et,
    'consumer_loan': consumerLoan.names.et,
    'credit_line': creditLine.names.et,
    'small_loan': smallLoan.names.et,
    'home_loan': homeLoan.names.et,
    'car_loan': carLoan.names.et,
    'refinancing': refinancing.names.et,
    'business_loan': businessLoan.names.et
  },
  'ru': {
    'quick_loan': quickLoan.names.ru,
    'consumer_loan': consumerLoan.names.ru,
    'credit_line': creditLine.names.ru,
    'small_loan': smallLoan.names.ru,
    'home_loan': homeLoan.names.ru,
    'car_loan': carLoan.names.ru,
    'refinancing': refinancing.names.ru,
    'business_loan': businessLoan.names.ru
  },
  'en': {
    'quick_loan': quickLoan.names.en,
    'consumer_loan': consumerLoan.names.en,
    'credit_line': creditLine.names.en,
    'small_loan': smallLoan.names.en,
    'home_loan': homeLoan.names.en,
    'car_loan': carLoan.names.en,
    'refinancing': refinancing.names.en,
    'business_loan': businessLoan.names.en
  }
};

// Функция для получения информации о типе кредита
export function getCreditTypeInfo(creditType: CreditType): CreditTypeInfo {
  return creditTypes[creditType];
}

// Функция для получения всех типов кредитов
export function getAllCreditTypes(): CreditTypeInfo[] {
  return Object.values(creditTypes);
}
