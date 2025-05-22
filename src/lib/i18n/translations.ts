
import { LocaleCode } from './config';

// Типы для переводов
export type TranslationKey = 
  | 'home.title' 
  | 'home.subtitle'
  | 'home.description'
  | 'credits.title'
  | 'credits.compare'
  | 'about.title'
  | 'about.mission'
  | 'about.team'
  | 'privacy.title'
  | 'privacy.information'
  | 'privacy.cookies'
  | 'nav.home'
  | 'nav.credits'
  | 'nav.about'
  | 'nav.privacy'
  | 'footer.rights'
  | 'filter.all'
  | 'filter.amount'
  | 'filter.term'
  | 'filter.rate'
  | 'loan.apply'
  | 'loan.details'
  | 'loan.requirements';

// Тип для словаря переводов
export type TranslationDictionary = Record<TranslationKey, string>;

// Словари переводов для каждого языка
export const translations: Record<LocaleCode, TranslationDictionary> = {
  'en': {
    'home.title': 'Payday Loan Help - Free Advice',
    'home.subtitle': 'Compare loan offers',
    'home.description': 'Compare loan offers from different countries and find the best financial solution for your needs.',
    'credits.title': 'Compare Credits',
    'credits.compare': 'Compare all credit offers and find the best solution',
    'about.title': 'About Us',
    'about.mission': 'Our mission is to help people make informed financial decisions',
    'about.team': 'Our team consists of financial experts',
    'privacy.title': 'Privacy Policy',
    'privacy.information': 'Information we collect',
    'privacy.cookies': 'Cookies and tracking',
    'nav.home': 'Home',
    'nav.credits': 'Credits',
    'nav.about': 'About',
    'nav.privacy': 'Privacy',
    'footer.rights': 'All rights reserved',
    'filter.all': 'All offers',
    'filter.amount': 'Amount',
    'filter.term': 'Term',
    'filter.rate': 'Interest Rate',
    'loan.apply': 'Apply now',
    'loan.details': 'View details',
    'loan.requirements': 'Requirements'
  },
  'et': {
    'home.title': 'Kiirlaenu Abi - Tasuta Nõustamine',
    'home.subtitle': 'Võrdle laenupakkumisi',
    'home.description': 'Võrdle laenupakkumisi erinevatest pankadest ja leia parim finantseerimislahendus oma vajadustele.',
    'credits.title': 'Võrdle Laene',
    'credits.compare': 'Võrdle kõiki laenupakkumisi ja leia parim lahendus',
    'about.title': 'Meist',
    'about.mission': 'Meie missioon on aidata inimestel teha teadlikke finantsotsuseid',
    'about.team': 'Meie meeskond koosneb finantsekspertidest',
    'privacy.title': 'Privaatsuspoliitika',
    'privacy.information': 'Kogutav teave',
    'privacy.cookies': 'Küpsised ja jälgimine',
    'nav.home': 'Avaleht',
    'nav.credits': 'Laenud',
    'nav.about': 'Meist',
    'nav.privacy': 'Privaatsus',
    'footer.rights': 'Kõik õigused kaitstud',
    'filter.all': 'Kõik pakkumised',
    'filter.amount': 'Summa',
    'filter.term': 'Periood',
    'filter.rate': 'Intressimäär',
    'loan.apply': 'Taotle kohe',
    'loan.details': 'Vaata üksikasju',
    'loan.requirements': 'Nõuded'
  },
  'ru': {
    'home.title': 'Помощь с Кредитами - Бесплатная Консультация',
    'home.subtitle': 'Сравнение кредитных предложений',
    'home.description': 'Сравните кредитные предложения от разных банков и найдите лучшее финансовое решение для ваших потребностей.',
    'credits.title': 'Сравнение Кредитов',
    'credits.compare': 'Сравните все кредитные предложения и найдите лучшее решение',
    'about.title': 'О Нас',
    'about.mission': 'Наша миссия - помочь людям принимать обоснованные финансовые решения',
    'about.team': 'Наша команда состоит из финансовых экспертов',
    'privacy.title': 'Политика Конфиденциальности',
    'privacy.information': 'Информация, которую мы собираем',
    'privacy.cookies': 'Файлы cookie и отслеживание',
    'nav.home': 'Главная',
    'nav.credits': 'Кредиты',
    'nav.about': 'О нас',
    'nav.privacy': 'Конфиденциальность',
    'footer.rights': 'Все права защищены',
    'filter.all': 'Все предложения',
    'filter.amount': 'Сумма',
    'filter.term': 'Срок',
    'filter.rate': 'Процентная ставка',
    'loan.apply': 'Оформить сейчас',
    'loan.details': 'Подробнее',
    'loan.requirements': 'Требования'
  },
  'lt': {
    'home.title': 'Greitos Paskolos Pagalba - Nemokamos Konsultacijos',
    'home.subtitle': 'Palyginkite paskolų pasiūlymus',
    'home.description': 'Palyginkite paskolų pasiūlymus iš skirtingų šaltinių ir raskite geriausią finansinį sprendimą savo poreikiams.',
    'credits.title': 'Palyginti Kreditus',
    'credits.compare': 'Palyginkite visus kreditų pasiūlymus ir raskite geriausią sprendimą',
    'about.title': 'Apie mus',
    'about.mission': 'Mūsų misija - padėti žmonėms priimti pagrįstus finansinius sprendimus',
    'about.team': 'Mūsų komandą sudaro finansų ekspertai',
    'privacy.title': 'Privatumo Politika',
    'privacy.information': 'Informacija, kurią renkame',
    'privacy.cookies': 'Slapukai ir sekimas',
    'nav.home': 'Pagrindinis',
    'nav.credits': 'Kreditai',
    'nav.about': 'Apie mus',
    'nav.privacy': 'Privatumas',
    'footer.rights': 'Visos teisės saugomos',
    'filter.all': 'Visi pasiūlymai',
    'filter.amount': 'Suma',
    'filter.term': 'Terminas',
    'filter.rate': 'Palūkanų norma',
    'loan.apply': 'Kreiptis dabar',
    'loan.details': 'Žiūrėti detales',
    'loan.requirements': 'Reikalavimai'
  },
  'fi': {
    'home.title': 'Pikavippi Apu - Ilmainen Neuvonta',
    'home.subtitle': 'Vertaa lainatarjouksia',
    'home.description': 'Vertaa lainatarjouksia eri pankeista ja löydä paras rahoitusratkaisu tarpeisiisi.',
    'credits.title': 'Vertaa Luottoja',
    'credits.compare': 'Vertaa kaikkia lainatarjouksia ja löydä paras ratkaisu',
    'about.title': 'Meistä',
    'about.mission': 'Tehtävämme on auttaa ihmisiä tekemään tietoon perustuvia taloudellisia päätöksiä',
    'about.team': 'Tiimimme koostuu rahoitusalan asiantuntijoista',
    'privacy.title': 'Tietosuojakäytäntö',
    'privacy.information': 'Keräämämme tiedot',
    'privacy.cookies': 'Evästeet ja seuranta',
    'nav.home': 'Etusivu',
    'nav.credits': 'Lainat',
    'nav.about': 'Meistä',
    'nav.privacy': 'Tietosuoja',
    'footer.rights': 'Kaikki oikeudet pidätetään',
    'filter.all': 'Kaikki tarjoukset',
    'filter.amount': 'Määrä',
    'filter.term': 'Aika',
    'filter.rate': 'Korko',
    'loan.apply': 'Hae nyt',
    'loan.details': 'Katso tiedot',
    'loan.requirements': 'Vaatimukset'
  }
};

// Хук для получения перевода
export function getTranslation(locale: LocaleCode, key: TranslationKey): string {
  return translations[locale][key] || key;
}
