
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
