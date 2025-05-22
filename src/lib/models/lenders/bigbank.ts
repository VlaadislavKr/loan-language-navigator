
import { Lender } from './index';

export const bigbank: Lender = {
  id: 'bigbank',
  name: 'Bigbank',
  logo: '/placeholder.svg',
  website: 'https://www.bigbank.ee',
  countries: ['et', 'lt', 'fi'],
  establishedYear: 1992,
  license: 'European Banking License',
  description: {
    'et': 'Bigbank pakub tarbimislaene, kodulaene ja hoiuseid.',
    'ru': 'Bigbank предлагает потребительские кредиты, жилищные кредиты и депозиты.',
    'en': 'Bigbank offers consumer loans, home loans, and deposits.'
  }
};
