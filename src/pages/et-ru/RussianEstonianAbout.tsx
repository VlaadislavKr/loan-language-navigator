
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { getTranslation } from '@/lib/i18n/translations';

/**
 * Страница "О нас" для русскоязычной версии Эстонии
 * Оптимизирована для server-side rendering
 */
const RussianEstonianAbout = () => {
  const currentCountry = 'et';
  const currentLocale = 'ru';

  return (
    <MainLayout currentCountry={currentCountry} currentLocale={currentLocale}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            {getTranslation(currentLocale, 'about.title')}
          </h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="text-lg mb-6">
              В 44Finance мы стремимся предоставлять прозрачную, точную и непредвзятую 
              информацию о кредитных продуктах в Эстонии. Наша миссия — помочь потребителям 
              принимать обоснованные финансовые решения, сравнивая различные кредитные 
              предложения и понимая доступные им варианты.
            </p>
            <p className="text-lg mb-6">
              Мы убеждены, что каждый заслуживает доступа к понятной финансовой информации 
              на предпочитаемом языке, поэтому предлагаем наши услуги как на эстонском, 
              так и на русском языках.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-lg mb-6">
              Мы анализируем и сравниваем сотни кредитных предложений от различных кредиторов, 
              представляя информацию в понятном и доступном формате. Наши инструменты сравнения 
              помогут найти наиболее подходящие финансовые решения, основываясь на ваших 
              конкретных потребностях.
            </p>
            <p className="text-lg mb-6">
              Наш сайт охватывает различные типы кредитов, включая быстрые кредиты, 
              потребительские кредиты, жилищные кредиты и многое другое. Мы регулярно 
              обновляем нашу базу данных, чтобы гарантировать актуальность и точность 
              всей представленной информации.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Наша команда</h2>
            <p className="text-lg mb-6">
              Наша команда состоит из финансовых экспертов, аналитиков и создателей 
              контента, которые стремятся помогать людям принимать разумные финансовые 
              решения.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Как мы зарабатываем</h2>
            <p className="text-lg mb-6">
              Мы сохраняем нашу независимость, четко разделяя редакционный контент 
              и коммерческие отношения. Мы можем получать вознаграждение от кредиторов, 
              когда пользователи переходят по ссылкам или подают заявки на продукты 
              через нашу платформу, но это никогда не влияет на наши рейтинги, 
              оценки или обзоры.
            </p>
            <p className="text-lg">
              Наша главная цель — всегда предоставлять ценность нашим пользователям 
              через честную, прозрачную и исчерпывающую информацию.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default RussianEstonianAbout;
