
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { getTranslation } from '@/lib/i18n/translations';

/**
 * Страница "О нас" для эстонской версии сайта
 * Оптимизирована для server-side rendering
 */
const EstonianAbout = () => {
  const currentCountry = 'et';
  const currentLocale = 'et';

  return (
    <MainLayout currentCountry={currentCountry} currentLocale={currentLocale}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            {getTranslation(currentLocale, 'about.title')}
          </h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Meie missioon</h2>
            <p className="text-lg mb-6">
              44Finance'is oleme pühendunud läbipaistvale, täpsele ja erapooletule 
              teabe edastamisele laenude kohta Eestis. Meie missioon on aidata tarbijatel 
              teha teadlikke finantsotsuseid, võrreldes erinevaid krediiditooteid ja 
              mõistes nende valikuid.
            </p>
            <p className="text-lg mb-6">
              Usume, et igaüks väärib juurdepääsu selgele finantsinfole oma eelistatud 
              keeles, mistõttu pakume oma teenuseid nii eesti kui ka vene keeles.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Mida me teeme</h2>
            <p className="text-lg mb-6">
              Me analüüsime ja võrdleme sadu laenupakkumisi erinevatelt laenuandjatelt, 
              esitades teavet selgel ja lihtsasti arusaadaval viisil. Meie võrdlustööriistad 
              aitavad leida kõige sobivamad finantseerimislahendused vastavalt teie 
              konkreetsetele vajadustele.
            </p>
            <p className="text-lg mb-6">
              Meie veebisait hõlmab erinevat tüüpi laene, sealhulgas kiirlaene, 
              tarbimislaene, kodulaene ja palju muud. Uuendame regulaarselt oma andmebaasi, 
              et tagada kogu teabe ajakohasus ja täpsus.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Meie meeskond</h2>
            <p className="text-lg mb-6">
              Meie meeskonda kuuluvad finantseksperdid, analüütikud ja 
              sisuloojad, kes on pühendunud inimeste aitamisele arukate 
              finantsotsuste tegemisel.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Kuidas me raha teenime</h2>
            <p className="text-lg mb-6">
              Säilitame oma sõltumatuse, eristades selgelt oma toimetuse sisu 
              ja ärisuhteid. Võime saada tasu laenuandjatelt, kui kasutajad 
              klõpsavad linkidel või taotlevad tooteid meie platvormi kaudu, 
              kuid see ei mõjuta kunagi meie reitinguid, hindamisi ega arvustusi.
            </p>
            <p className="text-lg">
              Meie peamine eesmärk on alati pakkuda oma kasutajatele väärtust 
              ausa, läbipaistva ja põhjaliku teabe kaudu.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default EstonianAbout;
