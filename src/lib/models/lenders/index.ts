
import { CreditType } from '../creditTypes';

// Интерфейс для кредитных предложений
export interface CreditOffer {
  id: string;
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
}

// Интерфейс для кредиторов
export interface Lender {
  id: string;
  name: string;
  logo: string;
  website: string;
  countries: string[]; // Коды стран, где доступен кредитор
  establishedYear: number;
  license?: string;
  description: Record<string, string>; // Локализованные описания
  creditOffers: CreditOffer[]; // Кредитные предложения данного кредитора
}

// Импорт всех кредиторов
import { ferratum } from './ferratum';
import { bondora } from './bondora';
import { credit24 } from './credit24';
import { bigbank } from './bigbank';

// Список кредиторов
export const lenders: Lender[] = [
  ferratum,
  bondora,
  credit24,
  bigbank
];

// Функция для получения кредиторов для определенной страны
export function getLendersForCountry(countryCode: string): Lender[] {
  return lenders.filter(lender => lender.countries.includes(countryCode));
}

// Функция для получения кредитора по ID
export function getLenderById(id: string): Lender | undefined {
  return lenders.find(lender => lender.id === id);
}

// Функция для получения всех кредитных предложений
export function getAllCreditOffers(): CreditOffer[] {
  return lenders.flatMap(lender => 
    lender.creditOffers.map(offer => ({
      ...offer,
      lenderId: lender.id // Для совместимости со старым кодом
    }))
  );
}

// Функция для получения предложений по стране
export function getCreditOffersByCountry(countryCode: string): Array<CreditOffer & { lenderId: string }> {
  return getLendersForCountry(countryCode).flatMap(lender => 
    lender.creditOffers.map(offer => ({
      ...offer,
      lenderId: lender.id
    }))
  );
}

// Функция для получения предложений по типу кредита
export function getCreditOffersByType(countryCode: string, creditType: CreditType): Array<CreditOffer & { lenderId: string }> {
  return getCreditOffersByCountry(countryCode).filter(offer => offer.creditType === creditType);
}

// Функция для получения предложения по ID
export function getCreditOfferById(id: string): (CreditOffer & { lenderId: string }) | undefined {
  for (const lender of lenders) {
    const offer = lender.creditOffers.find(o => o.id === id);
    if (offer) {
      return { ...offer, lenderId: lender.id };
    }
  }
  return undefined;
}
