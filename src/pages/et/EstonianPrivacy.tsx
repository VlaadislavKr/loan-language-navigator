
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { getTranslation } from '@/lib/i18n/translations';

/**
 * Страница политики конфиденциальности для эстонской версии сайта
 * Оптимизирована для server-side rendering
 */
const EstonianPrivacy = () => {
  const currentCountry = 'et';
  const currentLocale = 'et';

  return (
    <MainLayout currentCountry={currentCountry} currentLocale={currentLocale}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            {getTranslation(currentLocale, 'privacy.title')}
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              See privaatsuspoliitika kirjeldab, kuidas 44Finance ("meie", "meid" või "meie") 
              kogub, kasutab ja jagab teie isikuandmeid, kui külastate meie veebisaiti.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Teave, mida me kogume</h2>
            <p className="mb-4">
              Kui külastate veebisaiti, kogume automaatselt teatud teavet teie seadme kohta, 
              sealhulgas teavet teie veebibrauseri, IP-aadressi, ajavööndi ja mõne teie 
              seadmesse installitud küpsise kohta.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Kuidas me teie teavet kasutame</h2>
            <p className="mb-4">
              Kasutame teavet, mida me kogume, et aidata meil seirata potentsiaalset riski 
              ja pettust, ning üldisemalt oma saidi parandamiseks ja optimeerimiseks.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Teie isikuandmete jagamine</h2>
            <p className="mb-4">
              Jagame teie isikuandmeid teenusepakkujatega, et aidata meil pakkuda oma 
              teenuseid ja täita oma lepinguid teiega.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Teie õigused</h2>
            <p className="mb-4">
              Kui olete Euroopa resident, on teil õigus pääseda juurde isikuandmetele, 
              mis meil teie kohta on, ja taotleda oma isikuandmete parandamist, 
              värskendamist või kustutamist.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Andmete säilitamine</h2>
            <p className="mb-4">
              Kui esitate teavet veebisaidi kaudu, säilitame teie teavet oma 
              kirjete jaoks, kui ja kuni te palute meil see teave kustutada.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Muudatused</h2>
            <p className="mb-4">
              Me võime aeg-ajalt seda privaatsuspoliitikat uuendada, et kajastada 
              muudatusi meie tavades või muudel tegevus-, õiguslikel või regulatiivsetel põhjustel.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Võtke meiega ühendust</h2>
            <p className="mb-4">
              Lisateabe saamiseks meie privaatsustavade kohta, kui teil on küsimusi 
              või kui soovite esitada kaebust, võtke meiega ühendust e-posti teel 
              aadressil info@44finance.com.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EstonianPrivacy;
