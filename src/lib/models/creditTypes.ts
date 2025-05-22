
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

// Локализованные названия типов кредитов
export const creditTypeNames: Record<string, Record<CreditType, string>> = {
  'et': {
    'quick_loan': 'Kiirlaen',
    'consumer_loan': 'Tarbimislaen',
    'credit_line': 'Krediidikonto',
    'small_loan': 'Väikelaen',
    'home_loan': 'Kodulaen',
    'car_loan': 'Autolaen',
    'refinancing': 'Refinantseerimine',
    'business_loan': 'Ärilaen'
  },
  'ru': {
    'quick_loan': 'Быстрый кредит',
    'consumer_loan': 'Потребительский кредит',
    'credit_line': 'Кредитная линия',
    'small_loan': 'Малый кредит',
    'home_loan': 'Жилищный кредит',
    'car_loan': 'Автокредит',
    'refinancing': 'Рефинансирование',
    'business_loan': 'Бизнес-кредит'
  },
  'en': {
    'quick_loan': 'Quick Loan',
    'consumer_loan': 'Consumer Loan',
    'credit_line': 'Credit Line',
    'small_loan': 'Small Loan',
    'home_loan': 'Home Loan',
    'car_loan': 'Car Loan',
    'refinancing': 'Refinancing',
    'business_loan': 'Business Loan'
  }
};
