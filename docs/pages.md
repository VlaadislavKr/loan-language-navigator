
# Структура страниц проекта

В этом документе описаны все страницы сайта, их назначение и основные компоненты.

## Общая информация
- Проект представляет собой редизайн сайта 44finance.com
- Основной язык сайта: английский (без языкового префикса в URL)
- Сайт имеет локализованные версии для разных стран с соответствующими языками

## Языковая структура
- `/` - Английская версия (основная)
- `/et` - Эстония на эстонском языке
- `/et-ru` - Эстония на русском языке
- `/lt` - Литва на литовском языке
- `/fi` - Финляндия на финском языке

Важно: Страницы `/et` и `/et-ru` должны быть связаны между собой через hreflang alternate.
Локализованные версии для разных стран не должны иметь перелинковку через hreflang alternate.

## Английские страницы
### Главная страница (/)
- Описание: Основная страница сайта на английском языке
- Основные компоненты:
  - Шапка с навигацией и переключателем языка
  - Описание проекта
  - Перечень стран с локализованными версиями
  - Подвал с дополнительной информацией

### Политика конфиденциальности (/privacy)
- Описание: Страница с информацией о политике конфиденциальности
- Основные компоненты:
  - Описание политики конфиденциальности
  - Условия использования данных

## Страницы для Эстонии (эстонский и русский языки)
### Главная страница (/et, /et-ru)
- Описание: Главная страница сайта с обзором ключевых кредитных предложений
- Основные компоненты:
  - Шапка с навигацией и переключателем языка
  - Баннер с основной информацией о сервисе
  - Блок с популярными кредитными предложениями
  - Блок с фильтрами для быстрого поиска предложений
  - Подвал с дополнительной информацией

### Страница каталога кредитов (/et/catalog, /et-ru/catalog)
- Описание: Полный каталог всех кредитных предложений с фильтрацией
- Основные компоненты:
  - Боковая панель с фильтрами (тип кредита, сумма, срок и т.д.)
  - Основной блок с карточками кредитов
  - Пагинация для навигации по страницам каталога

### Детальная страница кредита (/et/credit/:id, /et-ru/credit/:id)
- Описание: Подробная информация о конкретном кредитном предложении
- Основные компоненты:
  - Блок с основными параметрами кредита
  - Калькулятор для расчета платежей
  - График платежей
  - Условия получения и требования
  - Отзывы о кредиторе

### Страница сравнения (/et/compare, /et-ru/compare)
- Описание: Страница для сравнения нескольких кредитных предложений
- Основные компоненты:
  - Таблица сравнения с параметрами кредитов
  - Возможность добавления/удаления кредитов для сравнения
  - Визуальные графики для наглядного представления различий

### О проекте (/et/about, /et-ru/about)
- Описание: Информация о сервисе, его миссии и принципах работы
- Основные компоненты:
  - История создания сервиса
  - Принципы отбора кредитных предложений
  - Команда проекта
  - Контактная информация

### FAQ (/et/faq, /et-ru/faq)
- Описание: Часто задаваемые вопросы о сервисе и кредитах
- Основные компоненты:
  - Категории вопросов
  - Поиск по вопросам
  - Блок с возможностью задать свой вопрос

## Особенности разработки
- Разработка начинается с эстонской версии (эстонский и русский языки)
- После завершения эстонской версии будут разработаны литовская и финская версии
- Во всех странах используются одинаковые универсальные компоненты
- Списки страниц, типов кредитов и кредиторов отличаются для каждой страны
- Специфика кредитных предложений в Эстонии: Kiirlaen, Väikelaen, Tarbimislaen и т.д.
- Основные кредиторы в Эстонии: Ferratum, Bondora, Credit24 и другие

---

## Полный список страниц проекта с URL, hreflang и metatitle

| URL | hreflang 1 | hreflang 2 | hreflang 3 | metatitle |
|-----|------------|------------|------------|-----------|
| / | /et/ | / | /fi/ | Payday Loan Help - Free Advice - 44finance |
| /about/ | /about/ | /fi/keita-me-olemme/ | | About us - Home |
| /about/vladislav-kotkas-cv/ | | | | Vladislav Kotkas - Home |
| /et-ru/ | | | | Помощь в получении кредита в Эстонии - 44finance |
| /et-ru/kredity/ | /et/laenud/ | /et-ru/kredity/ | | 【Кредиты в Эстонии】ᐈ Где взять самый выгодный кредит? Деньги в долг, займ, выдача кредита в банке |
| /et-ru/kredity/avtolizing/ | | | | Автолизинг в Эстонии - лизинг автомобиля, купить машину в лизинг, авто в лизинг, автолизинг без справки о доходах |
| /et-ru/kredity/bez-raboty/ | | | | Где взять кредит безработному в Эстонии? ᐈ до 5000 € кредит без официального места работы |
| /et-ru/kredity/bez-spravki-o-dohodah/ | | | | ᐈ Кредит без справки о доходах в Эстонии [до 5000 €] ᐈ где получить кредит без выписки со счёта о доходах, можно взять |
| /et-ru/kredity/bystryj-kredit-bez-vypiski-so-scheta/ | | | | 【Быстрый кредит без выписки со счета】в Эстонии |
| /et-ru/kredity/bystryj-kredit/ | /et/laenud/kiirlaen/ | /et-ru/kredity/bystryj-kredit/ | | 🤑 БЫСТРЫЙ КРЕДИТ В ЭСТОНИИ по телефону без отказа и без справки о доходах, взять быстрый займ наличными и онлайн |
| /et-ru/kredity/do-1000-eur/ | | | | 【Кредит до 1000 €】в Эстонии |
| /et-ru/kredity/kreditnyj-schet/ | /et/laenud/krediidikonto/ | /et-ru/kredity/kreditnyj-schet/ | | Кредитный счёт в Эстонии - где открыть и что это такое? |
| /et-ru/kredity/malyj/ | /et/laenud/vaikelaen/ | /et-ru/kredity/malyj/ | | Малый кредит в Эстонии - взять малый займ без справки о доходах |
| /et-ru/kredity/onlain/ | | | | 【Кредит онлайн】 ᐈ Где можно взять кредит онлайн в Эстонии? |
| /et-ru/kredity/ot-chastnogo-litsa/ | | | | Кредит от частного лица в Эстонии - частные кредиты |
| /et-ru/kredity/refinansirovanie/ | | | | Рефинансирование кредита в Эстонии без залога |
| /et-ru/kredity/s-plohoj-kreditnoj-istoriej/ | /et/laenud/laen-maksehairega/ | /et-ru/kredity/s-plohoj-kreditnoj-istoriej/ | | Взять кредит с плохой кредитной историей в Эстонии - кто выдаёт, в каком банке быстрые кредиты с плохой кредитной историей без справок и поручителей |
| /et-ru/kredity/sms/ | | | | СМС кредиты в Эстонии - взять sms кредиты без справки о доходах |
| /et-ru/kredity/v-tallinne/ | | | | 【Кредиты в Таллинне】от ⓿% до 10000 € |
| /et-ru/kredity/zhilishhnyj/ | /et/laenud/kodulaen/ | /et-ru/kredity/zhilishhnyj/ | | Жилищный кредит в Эстонии - калькулятор кредита на квартиру, на дом, на жильё |
| /et/ | | | | Sinu abija laenu kohta - 44finance |
| /et/blogi/ | | | | Blogi laenude ja finantsteenuste kohta |
| /et/blogi/inimesed-kes-annavad-laenu/ | | | | Inimesed, kes annavad laenu: olulised nüansid ja soovitused |
| /et/blogi/intress/ | | | | Intress - Home |
| /et/blogi/kes-annaks-laenu/ | | | | Kes on laenuandja? Kes Annaks Laenu: Üksikasjalik Juhend ja Parimad Laenuandjad |
| /et/blogi/kiirlaenude-eelised-ja-puudused/ | | | | Kiirlaenude eelised ja puudused |
| /et/blogi/krediidi-kulukuse-maar/ | | | | Krediidi Kulukuse Määr - Home |
| /et/blogi/kuidas-hoida-end-rahaliselt-stabiilsena/ | | | | Kuidas hoida end rahaliselt stabiilsena? |
| /et/blogi/kust-saada-kiiresti-laenu/ | | | | Kust saada kiiresti laenu? - kust saada kiiresti raha, kust saada kiirlaenu |
| /et/blogi/moisted/ | | | | Mõisted - Home |
| /et/blogi/uuring-millistest-finantsteenustest-te-olete-kuulnud-viimase-2-aasta-jooksul/ | | | | Uuring: Millistest finantsteenustest Te olete kuulnud viimase 2 aasta jooksul? |
| /et/blogi/valtige-kiirlaenude-vigu-oppige-mida-peate-teadma-enne-laenu-votmist/ | | | | Vältige kiirlaenude vigu - õppige, mida peate teadma enne laenu võtmist |
| /et/kasutustingimused/ | | | | Kasutustingimused - Home |
| /et/kkk/ | | | | KKK - Korduma kippuvad küsimused laenude kohta |
| /et/kkk/kas-laenu-on-voimalik-valja-votta-sularahas/ | | | | Laenud sularahas - Kas laenu on võimalik välja võtta sularahas? |
| /et/kkk/kus-vaadata-infot-oma-volgnevustest/ | | | | Kus vaadata infot oma võlgnevustest? |
| /et/kkk/mis-on-kkm/ | | | | Mis on KKM (krediidi kulukuse määr)? |
| /et/kkk/mis-on-laenu-esimene-eelotsus/ | | | | Mis on laenu esimene eelotsus? - Home |
| /et/kkk/mis-on-laenuleping/ | | | | Mis on laenuleping? |
| /et/krediidireiting/ | | | | Krediidireiting - skooring, eraisiku krediidireitingu kalkulaator |
| /et/laenud/ | /et/laenud/ | /et-ru/kredity/ | | Soodsad laenupakkumised Eestis - Leia endale parim laenu võtmise võimalus, uued laenud |
| /et/laenud/eralaen/ | | | | Eralaen - parimad eralaenud Eestis |
| /et/laenud/ilma-konto-valjavotteta/ | | | | Laenud ilma konto väljavõtteta - kiire ja mugav laenu saamine - kiirlaenud ilma pangaväljavõteta, ilma sissetulekuta, ilma palgatõendita, sms laen ilma palgatõendita, laen ilma palgatõendita |
| /et/laenud/kiirlaen/ | /et/laenud/kiirlaen/ | /et-ru/kredity/bystryj-kredit/ | | ᐈ KIIRLAEN (mai 2025) kuni 10 000 € al 0% - uus kiirlaen 15 minutiga internetist kodust lahkumata, laenud kiirelt, kiirlaen ilma tuvastamiseta, kiirlaen konto väljavõtteta ja palgatõendita kiirlaenud Eestis, kiirlaen id kaardiga, parim ja soodne kiire laen sularahas |
| /et/laenud/kiirlaen/eestis/ | | | | Kiirlaenud Eestis |
| /et/laenud/kiirlaen/internetist/ | | | | Kiirlaenud internetist |
| /et/laenud/kiirlaen/kohe-katte/ | | | | Saada Kiirlaen kohe kätte - laen vastus kohe, väikelaen kohe kätte |
| /et/laenud/kodulaen/ | /et/laenud/kodulaen/ | /et-ru/kredity/zhilishhnyj/ | | Kodulaenu võtmine (mai 2025) - kalkulaator, intress, sissemaksuta kodulaen ilma omafinantseeringuta kinnisvara tagatisel, tingimused, lepingutasu, taotlemine, võrdlus, refinantseerimine, parim kodulaen ilma tagatiseta |
| /et/laenud/krediidikonto/ | /et/laenud/krediidikonto/ | /et-ru/kredity/kreditnyj-schet/ | | Krediidikonto (mai 2025) - avamine, arvelduskrediit, krediidilimiit, laenulimiit, krediidiliin |
| /et/laenud/laen-maksehairega/ | /et/laenud/laen-maksehairega/ | /et-ru/kredity/s-plohoj-kreditnoj-istoriej/ | | Laen maksehäirega (mai 2025) - laen kehtiva maksehäiretega inimesele - kuidas saada laenu kui on maksehäired? kiirlaen maksehäirega, kiirlaen kehtiva maksehäirega |
| /et/laenud/pangalaenud/ | | | | Pangalaenud (mai 2025) |
| /et/laenud/tagatiseta-laen/ | | | | -71% Tagatiseta laen kuni 10 000 € (mai 2025) - võrdle laenu ilma tagatiseta % |
| /et/laenud/vaikelaen/ | /et/laenud/vaikelaen/ | /et-ru/kredity/malyj/ | | Väikelaen (mai 2025) - pakkujad, soodsaim väikelaen tagatiseta, maksehäirega, ilma konto väljavõtteta, ilma palgatõendita ja ilma sissetulekuta, eraisikutelt, firmale, intress, odav |
| /et/laenukalkulaator/ | | | | Laenukalkulaator - maksimaalse fikseeritud põhiosaga laenukalkulaator |
| /et/laenupakkujad/ | | | | Laenupakkujad Eestis - laenukontorid, uued laenufirmad, laenuandjad |
| /et/laenupakkujad/bondora/ | | | | Bondora |
| /et/laenupakkujad/monefit/ | | | | Monefit |
| /fi/ | | | | Me autamme sinua valitsemaan parhaan lainan - 44finance |
| /fi/laina/ | | | | Laina (toukokuu 2025) |
| /fi/laina/ilman-luottotietoja/ | | | | Laina ilman luottotietoja (toukokuu 2025) - laina luottotiedottomalle, s pankki laina ilman luottotietoja, luottotiedottomalle laina, järjestely laina luottotiedottomalle |
| /fi/laina/ilman-vakuuksia/ | | | | Laina ilman vakuuksia (toukokuu 2025) - vakuudeton laina heti, halvin laina ilman vakuuksia |
| /fi/laina/pieni-laina/ | | | | Pieni laina heti tilille - mistä nopea pieni laina helposti, luotettava pieni laina |
| /fi/laina/pikavippi/ | | | | Pikavippi heti tilille 24h (toukokuu 2025) - uusi pikavippi avattu ilman luottotietoja, maksuhäiriöiselle, ilman vakuuksia, korko, kokemuksia, 18v, 19v, 20v |
| /fi/laina/pikavippi/18v/ | | | | Pikavippi heti 18 v - laina 18 vuotiaalle: miten saada pikavippi 18 v opiskelijalle, rahat heti tilille |
| /fi/laina/pikavippi/24h/ | | | | Pikavippi heti 24h - rahat tilille 24h: pikavippi ympäri vuorokauden, pikavippi kellon ympäri |
| /fi/laina/pikavippi/luottotiedottomalle/ | | | | Pikavippi luottotiedottomalle (toukokuu 2025) - pikavippi heti ilman luottotietoja, pikavippi luottotietonsa menettäneelle, pikavippi joka ei tarkista luottotietoja, pikavippi luottotiedoton |
| /fi/laina/pikavippi/maksuhairioiselle/ | | | | Pikavippi maksuhäiriöiselle - miten saada pikavippi maksuhäiriömerkinnästä huolimatta |
| /fi/keita-me-olemme/ | | | | Keita me olemme |
| /kontaktid/ | | | | Kontakt - Home |
| /lt/ | | | | 44finance in Lithuania |
| /lt/paskolos/ | | | | Paskolos (gegužės 2025) - kaip gauti paskolą, kreditai, kas yra paskola |
| /lt/paskolos/automobiliui/ | | | | Paskola automobiliui (gegužės 2025) - paskola uz automobili be pajamu, paskola automobiliui maziausios palukanos, paskolos uzstatant automobili, paskola automobiliui su individualia veikla, kaip gauti paskola automobiliui, paskola masinai, paskola elektromobiliui, kreditai automobiliui, kreditas automobilio pirkimui |
| /lt/paskolos/be-kredito-patikrinimo/ | | | | Paskolos be kredito patikrinimo (gegužės 2025) - kreditai be tikrinimo |
| /lt/paskolos/be-palukanu/ | | | | Paskolos be palūkanų (gegužės 2025) - kreditai be palūkanų |
| /lt/paskolos/be-pradinio-inaso/ | | | | Paskola be pradinio įnašo (gegužės 2025) - kaip gauti paskola be vieno cento pavedimo, kaip gauti paskola be pradinio inaso |
| /lt/paskolos/be-uzstato/ | | | | Paskolos be užstato (gegužės 2025) - kreditai be užstato, kreditai imonems be uzstato |
| /lt/paskolos/busto-remontui/ | | | | Paskola būsto remontui (gegužės 2025) - paskola remontui, paskola renovacijai |
| /lt/paskolos/bustui/ | | | | Paskola būstui (gegužės 2025) - paskolos bustui isigyti, paskola antram bustui, kaip gauti paskola bustui, kreditai bustui isigyti, ko reikia norint gauti paskola bustui |
| /lt/paskolos/dirbantiems-uzsienyje/ | | | | Paskolos dirbantiems užsienyje (gegužės 2025) - paskola dirbant uzsienyje, kaip gauti paskola is uzsienio, kreditai dirbantiems uzsienyje, paskolos gyvenantiems uzsienyje, ar galima gauti paskola dirbant uzsienyje |
| /lt/paskolos/greita-paskola/ | | | | Greita paskola (gegužės 2025) - greitas paskolos internetu, greiti kreditai visiems per 15 min |
| /lt/paskolos/greita-paskola/bedarbiams/ | | | | Greitos paskolos bedarbiams (gegužės 2025) - greitieji kreditai nedirbantiems, greitosios paskolos nedirbantiems |
| /lt/paskolos/greita-paskola/ilgalaikiai/ | | | | Ilgalaikiai greitieji kreditai (gegužės 2025) - ilgalaikės greitos paskolos |
| /lt/paskolos/greita-paskola/per-15-min/ | | | | Greitieji kreditai per 15 min (gegužės 2025) |
| /lt/paskolos/greita-paskola/telefonu/ | | | | Greitieji kreditai telefonu (gegužės 2025) - greitos paskolos telefonu |
| /lt/paskolos/greita-paskola/turintiems-skolu/ | | | | Greitieji kreditai turintiems skolu (gegužės 2025) - greitos paskolos su bloga kredito istorija, greiti kreditai isiskolinusiems, greitos paskolos isiskolinusiems |
| /lt/paskolos/internetu/ | | | | Paskola internetu (gegužės 2025) - kreditai internetu, mini paskolos internetu, nauji kreditai internetu, paskola vekseliu internetu, paskola internetu per 15 min, kredit online, kreditas internete |
| /lt/paskolos/maziausiomis-palukanomis/ | | | | Paskola mažiausiomis palūkanomis (gegužės 2025) - kreditai su maziausiomis palukanomis |
| /lt/paskolos/palyginimas/ | | | | Paskolos palyginimas (gegužės 2025) - paskolų palyginimo platforma, paskolų platforma, paskolu atsiliepimai |
| /lt/paskolos/per-5-min/ | | | | Paskola per 5 min (gegužės 2025) |
| /lt/paskolos/refinansavimas/ | | | | Paskolų refinansavimas (gegužės 2025) - pigiausias refinansavimas internetu, kreditų refinansavimas, antstoliu refinansavimas turint skolu, paskolu refinansavimas isiskolinusiems, paskolu refinansavimas su bloga kredito istorija, skolų refinansavimas be uzstato, greitas refinansavimas, lenders refinansavimas |
| /lt/paskolos/sms-kreditai/ | | | | SMS kreditai (gegužės 2025) - kreditas sms zinute, sms kreditas telefonu, sms kreditas nedirbantiems |
| /lt/paskolos/trumpieji-kreditai/ | | | | Trumpieji kreditai (gegužės 2025) - trumpieji paskolos |
| /lt/paskolos/turintiems-skolu/ | | | | Paskolos turintiems skolų (gegužės 2025) - kaip gauti paskolos su bloga kredito istorija, kreditas turintiems skolu, paskolos turintiems antstoliu, kreditai su bloga kredito istorija |
| /lt/paskolos/vartojimo/ | | | | Paskola vartojimo (gegužės 2025) - vartojimo kreditai, paskolos is zmoniu be uzstato, vartojimo paskolų palūkanos |
| /lt/paskolos/verslui/ | | | | Paskola verslui (gegužės 2025) - paskola verslo pradziai, paskolos imonems, kreditai verslui, paskola jaunam verslui, kaip gauti paskola verslui, paskola irengimui, paskola pirmam verslui, paskola dirbant pagal individualia veikla, paskola komercinems patalpoms, paskola akcininkui, įmonės paskola fiziniam asmeniui, paskola juridiniam asmeniui |

*Документ будет обновляться по мере разработки новых страниц и компонентов.*
