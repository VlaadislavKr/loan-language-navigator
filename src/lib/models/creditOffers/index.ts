
import { CreditType } from '../creditTypes';
import { ferratumQuickLoan } from './ferratum-quick';
import { credit24CreditLine } from './credit24-credit-line';
import { bondoraConsumerLoan } from './bondora-consumer';
import { bigbankHomeLoan } from './bigbank-home-loan';

// Интерфейс для кредитных предложений
export interface CreditOffer {
  id: string;
  lenderId: string;
  creditType: CreditType;
  minAmount: number;
  maxAmount: number;
  minTerm: number; // в месяцах
  maxTerm: number; // в месяцах
  interestRate: {
    min: number;
    max: number;
    type: 'fixed' | 'variable';
  };
  annualPercentageRate: {
    min: number;
    max: number;
  };
  applicationFee: number;
  adminFee: number;
  earlyRepaymentFee: number;
  requirements: Record<string, string[]>; // Локализованные требования
  features: Record<string, string[]>; // Локализованные особенности
  countries: string[]; // Коды стран, где доступно предложение
}

// Список всех кредитных предложений
export const creditOffers: CreditOffer[] = [
  ferratumQuickLoan,
  credit24CreditLine,
  bondoraConsumerLoan,
  bigbankHomeLoan
];

// Список кредитных предложений для Эстонии
export const estonianCreditOffers = creditOffers.filter(offer => 
  offer.countries.includes('et')
);

// Функция для получения предложений по стране
export function getCreditOffersByCountry(countryCode: string): CreditOffer[] {
  return creditOffers.filter(offer => offer.countries.includes(countryCode));
}

// Функция для получения предложений по типу кредита
export function getCreditOffersByType(countryCode: string, creditType: CreditType): CreditOffer[] {
  return getCreditOffersByCountry(countryCode).filter(offer => offer.creditType === creditType);
}

// Функция для получения предложения по ID
export function getCreditOfferById(id: string): CreditOffer | undefined {
  return creditOffers.find(offer => offer.id === id);
}
