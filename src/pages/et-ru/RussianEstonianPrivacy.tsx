
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { getTranslation } from '@/lib/i18n/translations';

/**
 * Страница политики конфиденциальности для русскоязычной версии Эстонии
 * Оптимизирована для server-side rendering
 */
const RussianEstonianPrivacy = () => {
  const currentCountry = 'et';
  const currentLocale = 'ru';

  return (
    <MainLayout currentCountry={currentCountry} currentLocale={currentLocale}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            {getTranslation(currentLocale, 'privacy.title')}
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Эта Политика конфиденциальности описывает, как 44Finance («мы», «нас» или «наш») 
              собирает, использует и передает вашу личную информацию при посещении вами 
              нашего веб-сайта.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Информация, которую мы собираем</h2>
            <p className="mb-4">
              Когда вы посещаете веб-сайт, мы автоматически собираем определенную информацию 
              о вашем устройстве, включая информацию о вашем веб-браузере, IP-адресе, часовом 
              поясе и некоторых файлах cookie, установленных на вашем устройстве.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Как мы используем вашу информацию</h2>
            <p className="mb-4">
              Мы используем собираемую информацию, чтобы помочь нам отслеживать потенциальные 
              риски и мошенничество, а в более общем плане — для улучшения и оптимизации 
              нашего сайта.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Передача вашей личной информации</h2>
            <p className="mb-4">
              Мы передаем вашу личную информацию поставщикам услуг, чтобы помочь нам 
              предоставлять наши услуги и выполнять наши договорные обязательства перед вами.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Ваши права</h2>
            <p className="mb-4">
              Если вы являетесь жителем Европы, у вас есть право на доступ к личной информации, 
              которую мы храним о вас, и право требовать исправления, обновления или 
              удаления вашей личной информации.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Хранение данных</h2>
            <p className="mb-4">
              Когда вы предоставляете информацию через веб-сайт, мы будем хранить вашу 
              информацию для наших записей, если и до тех пор, пока вы не попросите 
              нас удалить эту информацию.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Изменения</h2>
            <p className="mb-4">
              Мы можем время от времени обновлять эту политику конфиденциальности, чтобы 
              отразить изменения в наших практиках или по другим операционным, 
              юридическим или нормативным причинам.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Свяжитесь с нами</h2>
            <p className="mb-4">
              Для получения дополнительной информации о наших политиках конфиденциальности, 
              если у вас есть вопросы или если вы хотите подать жалобу, пожалуйста, 
              свяжитесь с нами по электронной почте info@44finance.com.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RussianEstonianPrivacy;
