
# Архитектура приложения

## Общая структура проекта

```
credit-compass-global/
├── public/                   # Статические файлы
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/           # Общие UI компоненты
│   │   ├── common/           # Базовые компоненты
│   │   ├── layouts/          # Компоненты макетов
│   │   ├── features/         # Функциональные компоненты
│   │   └── ui/               # UI компоненты от shadcn
│   ├── hooks/                # Пользовательские хуки
│   ├── lib/                  # Утилиты и функции
│   │   ├── i18n/             # Локализация и интернационализация
│   │   ├── utils/            # Общие утилиты
│   │   ├── models/           # Модели данных
│   │   │   ├── creditTypes/  # Типы кредитов
│   │   │   └── lenders/      # Кредиторы и их предложения
│   │   └── services/         # Сервисы для работы с данными
│   ├── pages/                # Компоненты страниц
│   │   ├── Home/             # Главная страница
│   │   ├── About/            # Страница "О нас"
│   │   ├── CV/               # Страница резюме
│   │   ├── Privacy/          # Страница политики конфиденциальности
│   │   └── countries/        # Страницы для разных стран
│   │       ├── estonia/      # Страницы Эстонии
│   │       ├── lithuania/    # Страницы Литвы
│   │       └── finland/      # Страницы Финляндии
│   ├── routes/               # Маршрутизация 
│   ├── store/                # Управление состоянием
│   ├── themes/               # Темы и стили
│   ├── App.tsx               # Корневой компонент
│   └── main.tsx              # Точка входа
└── logs/                     # Логи (success.log, error.log)
```

## Структура маршрутизации

Мы будем использовать React Router с вложенной структурой маршрутов:

```
Routes
├── / (Index)                         # Главная страница
├── /about/                           # Страница "О нас"
│   └── /about/vladislav-kotkas-cv/   # Страница резюме
├── /privacy                          # Политика конфиденциальности
├── /et/                              # Эстония (эстонский)
│   ├── /et/laenud/                   # Каталог кредитов
│   ├── /et/laenud/[тип-кредита]/     # Страницы по типам кредитов
│   ├── /et/laenupakkujad/            # Страницы по кредиторам
│   ├── /et/blogi/                    # Блог
│   └── /et/kkk/                      # FAQ
├── /et-ru/                           # Эстония (русский)
│   ├── /et-ru/kredity/               # Каталог кредитов
│   ├── /et-ru/kredity/[тип-кредита]/ # Страницы по типам кредитов
│   ├── /et-ru/kreditory/             # Страницы по кредиторам
│   └── ...                           # Аналогично эстонской версии
├── /lt/                              # Литва (литовский)
└── /fi/                              # Финляндия (финский)
```

## Архитектурные принципы

### 1. Мультиязычность

Используем библиотеку i18next для локализации контента:

```
src/lib/i18n/
├── config.ts               # Конфигурация i18next
├── languageDetector.ts     # Определение языка пользователя
└── translations/           # Переводы
    ├── en/                 # Английские переводы
    ├── et/                 # Эстонские переводы
    ├── ru/                 # Русские переводы
    ├── lt/                 # Литовские переводы
    └── fi/                 # Финские переводы
```

### 2. Структура компонентов

Каждый компонент следует принципу:
- Один файл = один компонент
- Максимальная независимость компонентов
- Все данные передаются через props
- Никакого захардкоженного контента

Пример структуры компонента:

```
src/components/features/CreditCard/
├── CreditCard.tsx          # Основной компонент
├── CreditCardSkeleton.tsx  # Скелетон для загрузки
└── types.ts                # Типы и интерфейсы
```

### 3. Модель данных для кредитов

```
src/lib/models/
├── creditTypes/            # Типы кредитов
│   ├── quickLoan.ts        # Быстрый кредит
│   ├── consumerLoan.ts     # Потребительский кредит
│   ├── creditLine.ts       # Кредитная линия
│   └── index.ts            # Индексный файл с экспортами и интерфейсами
└── lenders/                # Кредиторы
    ├── ferratum.ts         # Данные о кредиторе и его предложениях
    ├── bondora.ts          # Данные о кредиторе и его предложениях
    ├── credit24.ts         # Данные о кредиторе и его предложениях
    └── index.ts            # Индексный файл с экспортами и интерфейсами
```

### Структура данных кредиторов

Каждый кредитор содержит:
1. Общую информацию о компании (название, логотип, лицензия и т.д.)
2. Список кредитных предложений со всеми параметрами

```typescript
export interface Lender {
  id: string;
  name: string;
  logo: string;
  website: string;
  countries: string[];
  establishedYear: number;
  license: string;
  description: Record<string, string>;
  creditOffers: CreditOffer[];
}

export interface CreditOffer {
  id: string;
  creditType: CreditType;
  minAmount: number;
  maxAmount: number;
  minTerm: number;
  maxTerm: number;
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
  requirements: Record<string, string[]>;
  features: Record<string, string[]>;
}
```

### 4. Управление состоянием

- **Локальное состояние**: React useState для компонентного уровня
- **Серверное состояние**: React Query для запросов к API и кеширования
- **Глобальное состояние**: Context API для данных, доступных во всем приложении (например, языковые настройки)

### 5. Обработка форм

Создадим универсальный сервис обработки форм:

```
src/lib/services/formService/
├── formHandler.ts          # Основной обработчик форм
├── formLogger.ts           # Логирование форм в success.log и error.log
└── formMailer.ts           # Отправка данных по SMTP
```

## Интернационализация URL:

```typescript
export const URL_MAPPINGS = {
  'credits': {
    'en': 'credits',
    'et': 'laenud',
    'ru': 'kredity',
    'lt': 'paskolos',
    'fi': 'laina'
  },
  'about': {
    'en': 'about',
    'et': 'meist',
    'ru': 'o-nas',
    'lt': 'apie-mus',
    'fi': 'keita-me-olemme'
  },
  // ... другие URL-сегменты
};
```

## SEO и метаданные

Для каждой страницы создаем объект с метаданными:

```typescript
export interface PageMeta {
  title: string;
  description: string;
  hreflang: Record<string, string>;
  canonical: string;
  ogImage?: string;
}
```

## Адаптивный дизайн

- Mobile first подход с использованием Tailwind CSS
- Отзывчивый интерфейс с брейкпоинтами: sm, md, lg, xl
- Оптимизированная навигация для мобильных устройств

## Оптимизация производительности

- Ленивая загрузка компонентов страниц
- Оптимизация изображений
- Предварительная загрузка ключевых данных
- Кеширование статических данных

## Логирование и мониторинг

- Логирование ошибок в `/logs/error.log`
- Логирование успешных действий в `/logs/success.log`
- Мониторинг производительности страниц

## Безопасность

- Проверка входных данных форм
- XSS и CSRF защита
- Защита от брутфорс-атак на формы

## Тестирование

- Unit-тесты для утилит и сервисов
- Интеграционные тесты для API
- E2E тесты для критически важных пользовательских сценариев
- A11y тесты для доступности

## Стратегия развертывания

- Сборка для продакшена с оптимизациями
- Проверка на совместимость с браузерами
- Мониторинг после развертывания
