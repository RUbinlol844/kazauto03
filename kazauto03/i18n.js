/* =========================================================
   KAZAUTO 03 — языки сайта: русский, казахский, английский
   ---------------------------------------------------------
   Тексты лежат в объекте DICT. Чтобы поправить перевод,
   меняйте строку в нужном языке. Ключ должен совпадать
   с data-i18n в index.html.
   ========================================================= */

(function () {
  "use strict";

  var DICT = {
    ru: {
      "meta.title": "KAZAUTO 03 — авто маркет в Кокшетау: авто в наличии и под заказ",
      "meta.desc": "KAZAUTO 03 — авто маркет в Кокшетау. Проверенные автомобили в наличии и под заказ. Кредит, рассрочка, trade-in, выкуп авто. Ежедневно с 9:00 до 20:00. ул. Шокана Уалиханова, 1/3.",

      "aria.home": "KAZAUTO 03 — на главную",
      "aria.nav": "Основная навигация",
      "aria.filterStatus": "Фильтр по наличию",
      "aria.footerNav": "Навигация в подвале",
      "img.hero": "Hyundai Tucson в авто маркете KAZAUTO 03",
      "img.credit": "Оформление автокредита",
      "img.tradein": "Trade-in автомобиля",

      "top.address": "Кокшетау, ул. Шокана Уалиханова, 1/3",
      "top.hours": "Ежедневно с 9:00 до 20:00",

      "logo.sub": "авто маркет · Кокшетау",
      "nav.cars": "Авто в наличии",
      "nav.order": "Под заказ",
      "nav.sell": "Продать авто",
      "nav.credit": "Кредит",
      "nav.tradein": "Trade-in",
      "nav.contacts": "Контакты",
      "header.fav": "Избранное",
      "header.write": "Написать",
      "header.menuOpen": "Открыть меню",
      "header.menuClose": "Закрыть меню",
      "lang.label": "Язык сайта",

      "hero.eyebrow": "Авто маркет в Кокшетау",
      "hero.title": "Авто <span class=\"accent\">в наличии</span><br>и под заказ",
      "hero.lead": "Проверенные автомобили с прозрачной историей. Помогаем с кредитом, рассрочкой и trade-in — всё оформляем на месте.",
      "hero.cta": "Смотреть авто",
      "hero.note": "авто в наличии",
      "hero.stat1": "Проверенные авто",
      "hero.stat1s": "диагностика и юридическая чистота",
      "hero.stat2": "Кредит и рассрочка",
      "hero.stat2s": "подберём программу под вас",
      "hero.stat3s": "работаем каждый день",

      "catalog.eyebrow": "Каталог",
      "catalog.title": "Авто<br>в наличии",
      "catalog.aside": "Актуальные автомобили авто маркета в Кокшетау. Не нашли нужную модель — подберём под заказ под ваш бюджет.",
      "catalog.asideLink": "Авто под заказ",
      "chips.all": "Все",
      "chips.stock": "В наличии",
      "chips.order": "Под заказ",
      "chips.fav": "Избранное",
      "sort.label": "Сортировка",
      "sort.default": "По умолчанию",
      "sort.priceAsc": "Цена: сначала дешевле",
      "sort.priceDesc": "Цена: сначала дороже",
      "sort.yearDesc": "Год: сначала новые",
      "filter.trans": "КПП",
      "filter.price": "Цена",
      "filter.body": "Кузов",
      "filter.drive": "Привод",
      "filter.any": "Любая",
      "filter.anyM": "Любой",
      "filter.reset": "Сбросить",
      "price.1": "до 2 млн ₸",
      "price.2": "2–3 млн ₸",
      "price.3": "3–5 млн ₸",
      "price.4": "от 5 млн ₸",
      "count": "Найдено: {n}",
      "empty": "По этому фильтру пока нет автомобилей. Сбросьте фильтры или напишите нам — подберём под заказ.",
      "empty.fav": "В избранном пока пусто. Нажмите на сердечко в карточке автомобиля — он сохранится здесь.",
      "catalog.note": "Цены и комплектации уточняйте у менеджера — наличие обновляется каждый день.",

      "card.engine": "Двигатель",
      "card.trans": "КПП",
      "card.mileage": "Пробег",
      "card.body": "Кузов",
      "card.more": "Подробнее",
      "status.stock": "В наличии",
      "status.order": "На заказ",
      "fav.add": "В избранное",
      "fav.remove": "Убрать из избранного",
      "fav.in": "В избранном",

      "order.eyebrow": "Под заказ",
      "order.title": "Нужной модели<br>нет в наличии?",
      "order.lead": "Подберём автомобиль под ваш бюджет и требования — из Кореи, Китая, ОАЭ, Европы или с рынка Казахстана.",
      "order.s1": "Заявка",
      "order.s1p": "Расскажите, какой автомобиль нужен: марка, модель, год, бюджет.",
      "order.s2": "Подбор",
      "order.s2p": "Найдём 2–3 варианта с фото, историей и итоговой ценой до Казахстана.",
      "order.s3": "Проверка",
      "order.s3p": "Проверим кузов, пробег и документы. Покажем отчёт до сделки.",
      "order.s4": "Оформление",
      "order.s4p": "Договор, оплата, доставка в Кокшетау и постановка на учёт.",
      "order.cta": "Оставить заявку",

      "credit.eyebrow": "Финансирование",
      "credit.title": "Кредит<br>и рассрочка",
      "credit.lead": "Поможем подобрать программу под ваш бюджет и доход. Работаем с несколькими банками — предложим несколько вариантов и объясним разницу без мелкого шрифта.",
      "credit.t1": "Несколько банков-партнёров — есть из чего выбрать",
      "credit.t2": "Помощь с документами и заявкой",
      "credit.t3": "Рассрочка и кредит с первоначальным взносом",
      "credit.t4": "Объясняем все платежи до подписания",
      "credit.cta": "Рассчитать кредит",

      "tradein.eyebrow": "Trade-in",
      "tradein.title": "Обменяйте авто<br>с доплатой",
      "tradein.lead": "Оценим ваш автомобиль в день обращения и зачтём его стоимость в счёт нового. Без долгих продаж и звонков «покупателей».",
      "tradein.t1": "Бесплатная оценка на месте",
      "tradein.t2": "Зачёт стоимости в счёт покупки",
      "tradein.t3": "Оформление документов за один визит",
      "tradein.cta": "Оценить автомобиль",

      "sell.eyebrow": "Продать авто",
      "sell.title": "Продайте машину<br>через KAZAUTO 03",
      "sell.lead": "Заполните форму и прикрепите фото — заявка с данными автомобиля уйдёт нам в WhatsApp. Оценим и назовём цену в день обращения.",
      "sell.t1": "Бесплатная оценка по фото и описанию",
      "sell.t2": "Выкуп или продажа через маркет",
      "sell.t3": "Поможем с документами и оформлением",
      "sell.note": "Не хотите заполнять форму — просто напишите в WhatsApp, ответим в рабочее время.",
      "sell.formTitle": "Заявка на продажу",
      "sell.formSub": "Данные и фото уйдут в WhatsApp KAZAUTO 03",
      "sell.upload": "Добавить фото автомобиля",
      "sell.uploadHint": "Нажмите, чтобы выбрать файл · JPG, PNG до 15 МБ",
      "sell.photoAlt": "Фото автомобиля",
      "sell.photoRemove": "Удалить фото",
      "field.brand": "Марка",
      "field.model": "Модель",
      "field.year": "Год выпуска",
      "field.mileage": "Пробег, км",
      "field.engine": "Двигатель",
      "field.trans": "КПП",
      "field.drive": "Привод",
      "field.body": "Кузов",
      "field.price": "Желаемая цена, ₸",
      "field.city": "Город",
      "field.name": "Ваше имя",
      "field.phone": "Телефон",
      "field.comment": "Комментарий",
      "field.commentPh": "Состояние, комплектация, что важно знать",
      "field.enginePh": "2.0 л · бензин",
      "field.cityPh": "Кокшетау",
      "field.namePh": "Имя",
      "field.choose": "Выберите",
      "agree": "Согласен на обработку персональных данных",
      "submit.sell": "Отправить в WhatsApp",
      "sell.formNote": "Откроется WhatsApp с готовыми данными — останется нажать «Отправить».",
      "success.title": "Заявка готова",
      "success.sellDefault": "Отправьте сообщение в WhatsApp — и прикрепите фото, если оно не прикрепилось.",
      "openWa": "Открыть WhatsApp",
      "savePhoto": "Сохранить фото",

      "about.eyebrow": "О нас",
      "about.lead": "Авто маркет в Кокшетау: проверенные автомобили с пробегом и новые — под заказ. Работаем с 9:00 до 20:00 каждый день.",
      "about.text": "Мы продаём автомобили, которые проверили сами: смотрим историю, состояние кузова и документы. Если что-то не сходится — такой автомобиль просто не попадает в каталог.",
      "about.i1": "Проверенные автомобили",
      "about.i1s": "Диагностика и юридическая чистота до сделки",
      "about.i2": "Кредит и рассрочка",
      "about.i2s": "Подберём программу и поможем с документами",
      "about.i3": "Trade-in",
      "about.i3s": "Оценим ваш автомобиль и зачтём в счёт нового",
      "about.i4": "ул. Шокана Уалиханова, 1/3",
      "about.i4s": "Кокшетау, 020000",

      "faq.eyebrow": "Вопросы",
      "faq.title": "Коротко<br>о главном",
      "faq.lead": "Не нашли ответ — напишите в WhatsApp, ответим быстро.",
      "faq.q1": "Как купить автомобиль в KAZAUTO 03?",
      "faq.a1": "Выберите автомобиль в каталоге или напишите нам — подберём вариант. Посмотрите машину у нас, проверьте документы и оформите сделку. При необходимости поможем с кредитом или trade-in.",
      "faq.q2": "Можно ли оформить кредит или рассрочку?",
      "faq.a2": "Да. Мы работаем с несколькими банками-партнёрами и подбираем программу под ваш бюджет и доход. Помогаем собрать документы и объясняем все условия до подписания.",
      "faq.q3": "Принимаете ли автомобиль в trade-in?",
      "faq.a3": "Да. Оценим ваш автомобиль в день обращения и зачтём его стоимость в счёт покупки нового. Оценка бесплатная.",
      "faq.q4": "Можно ли заказать авто, которого нет в наличии?",
      "faq.a4": "Да. Подбираем автомобили под заказ из Кореи, Китая, ОАЭ, Европы и с рынка Казахстана. Вы получаете варианты с фото, историей и итоговой ценой до Казахстана.",
      "faq.q5": "Где вы находитесь и когда работаете?",
      "faq.a5": "Кокшетау, ул. Шокана Уалиханова, 1/3 (рядом с АвтоЦОН). Работаем каждый день с 9:00 до 20:00. Телефон: 8 (777) 759 07 77.",

      "contacts.eyebrow": "Контакты",
      "contacts.title": "Приезжайте<br>к нам",
      "contacts.lead": "Позвоните или напишите в WhatsApp — ответим на вопросы, подскажем наличие и запишем на просмотр.",
      "contacts.callNote": "Звонок · ежедневно 9:00–20:00",
      "contacts.waNote": "Написать менеджеру",
      "contacts.instaNote": "Instagram · новые поступления",
      "contacts.addr": "ул. Шокана Уалиханова, 1/3",
      "contacts.addrNote": "Кокшетау, 020000 · рядом с АвтоЦОН",
      "contacts.hours": "Ежедневно с 9:00 до 20:00",
      "contacts.hoursNote": "Без выходных",
      "contacts.map": "Открыть на карте",

      "lead.title": "Оставить заявку",
      "lead.sub": "Перезвоним и ответим на вопросы",
      "lead.name": "Как вас зовут",
      "lead.namePh": "Имя",
      "lead.interest": "Что интересует",
      "lead.choose": "Выберите",
      "lead.i1": "Авто в наличии",
      "lead.i2": "Авто под заказ",
      "lead.i3": "Кредит или рассрочка",
      "lead.i4": "Trade-in",
      "lead.i5": "Другой вопрос",
      "lead.message": "Комментарий",
      "lead.messagePh": "Например: интересует Hyundai Tucson, бюджет до 9 млн, кредит",
      "submit.lead": "Отправить заявку",
      "lead.note": "После отправки откроется WhatsApp с готовым сообщением.",
      "lead.noteEndpoint": "Отправляя форму, вы соглашаетесь на обработку персональных данных.",
      "lead.successTitle": "Спасибо! Заявка готова.",
      "lead.successText": "Отправьте сообщение в WhatsApp — менеджер ответит в рабочее время.",

      "footer.text": "Авто в наличии и под заказ.<br>Кредит, рассрочка, trade-in.",
      "footer.copy": "© 2026 KAZAUTO 03. Демонстрационный сайт.",

      "modal.wa": "Написать в WhatsApp",
      "modal.call": "Позвонить",
      "modal.note": "Проверьте наличие и комплектацию у менеджера.",
      "modal.close": "Закрыть",
      "modal.drive": "привод",
      "modal.year": "Год",
      "modal.color": "Цвет",

      "unit.km": "км",
      "unit.liter": "л",
      "fuel.petrol": "бензин",
      "fuel.petrolGas": "бензин-газ",
      "fuel.diesel": "дизель",

      "val.Механика": "Механика",
      "val.Автомат": "Автомат",
      "val.Вариатор": "Вариатор",
      "val.Робот": "Робот",
      "val.Седан": "Седан",
      "val.Хэтчбек": "Хэтчбек",
      "val.Кроссовер": "Кроссовер",
      "val.Минивэн": "Минивэн",
      "val.Внедорожник": "Внедорожник",
      "val.Универсал": "Универсал",
      "val.Купе": "Купе",
      "val.Передний": "Передний",
      "val.Задний": "Задний",
      "val.Полный": "Полный",

      "msg.car": "Здравствуйте! Интересует {car}, {year} г. Подскажите, пожалуйста, наличие и условия.",
      "msg.leadHeader": "Заявка с сайта KAZAUTO 03",
      "msg.name": "Имя",
      "msg.phone": "Телефон",
      "msg.interest": "Интересует",
      "msg.comment": "Комментарий",
      "msg.sellHeader": "Заявка на продажу авто с сайта KAZAUTO 03",
      "msg.carLabel": "Автомобиль",
      "msg.mileage": "Пробег",
      "msg.engine": "Двигатель",
      "msg.trans": "КПП",
      "msg.drive": "Привод",
      "msg.body": "Кузов",
      "msg.price": "Цена",
      "msg.city": "Город",
      "msg.photo": "Фото: прикрепляю в чат",
      "msg.notSpecified": "Не указано",

      "err.brand": "Укажите марку",
      "err.model": "Укажите модель",
      "err.name": "Как к вам обращаться?",
      "err.name2": "Укажите имя — хотя бы 2 символа",
      "err.phone": "Введите номер телефона полностью",
      "err.agree": "Нужно согласие на обработку данных",
      "err.photoType": "Нужен файл изображения: JPG, PNG или HEIC",
      "err.photoSize": "Фото больше 15 МБ — выберите файл поменьше",
      "send.sending": "Отправляем…",
      "lead.sent": "Заявка отправлена. Менеджер свяжется с вами в рабочее время.",
      "lead.fallback": "Не удалось отправить автоматически. Отправьте заявку в WhatsApp — менеджер ответит в рабочее время.",
      "sell.shared": "Фото и данные переданы в WhatsApp. Если чат не открылся — нажмите кнопку ниже.",
      "sell.addPhoto": "Данные отправлены в WhatsApp. Прикрепите фото в чате — или сохраните его кнопкой ниже."
    },

    kk: {
      "meta.title": "KAZAUTO 03 — Көкшетаудағы авто маркет: қолда бар және тапсырыс бойынша авто",
      "meta.desc": "KAZAUTO 03 — Көкшетаудағы авто маркет. Тексерілген автомобильдер қолда бар және тапсырыс бойынша. Несие, бөліп төлеу, trade-in, авто сатып алу. Күн сайын 9:00-ден 20:00-ге дейін. Шоқан Уәлиханов көшесі, 1/3.",

      "aria.home": "KAZAUTO 03 — басты бетке",
      "aria.nav": "Негізгі навигация",
      "aria.filterStatus": "Қолда бары бойынша сүзгі",
      "aria.footerNav": "Төменгі навигация",
      "img.hero": "KAZAUTO 03 авто маркетіндегі Hyundai Tucson",
      "img.credit": "Автокредитті рәсімдеу",
      "img.tradein": "Автомобиль trade-in",

      "top.address": "Көкшетау, Шоқан Уәлиханов көшесі, 1/3",
      "top.hours": "Күн сайын 9:00-ден 20:00-ге дейін",

      "logo.sub": "авто маркет · Көкшетау",
      "nav.cars": "Қолда бар авто",
      "nav.order": "Тапсырыс бойынша",
      "nav.sell": "Авто сату",
      "nav.credit": "Несие",
      "nav.tradein": "Trade-in",
      "nav.contacts": "Байланыс",
      "header.fav": "Таңдаулылар",
      "header.write": "Жазу",
      "header.menuOpen": "Мәзірді ашу",
      "header.menuClose": "Мәзірді жабу",
      "lang.label": "Сайт тілі",

      "hero.eyebrow": "Көкшетаудағы авто маркет",
      "hero.title": "Авто <span class=\"accent\">қолда бар</span><br>және тапсырыспен",
      "hero.lead": "Тарихы ашық, тексерілген автомобильдер. Несие, бөліп төлеу және trade-in бойынша көмектесеміз — барлығын орнында рәсімдейміз.",
      "hero.cta": "Автомобильдерді көру",
      "hero.note": "қолда бар авто",
      "hero.stat1": "Тексерілген авто",
      "hero.stat1s": "диагностика және заңды тазалық",
      "hero.stat2": "Несие және бөліп төлеу",
      "hero.stat2s": "сізге сай бағдарлама таңдаймыз",
      "hero.stat3s": "күн сайын жұмыс істейміз",

      "catalog.eyebrow": "Каталог",
      "catalog.title": "Қолда бар<br>авто",
      "catalog.aside": "Көкшетаудағы авто маркеттің өзекті автомобильдері. Керек моделіңіз жоқ па — бюджетіңізге сай тапсырыспен таңдап береміз.",
      "catalog.asideLink": "Тапсырыс бойынша авто",
      "chips.all": "Барлығы",
      "chips.stock": "Қолда бар",
      "chips.order": "Тапсырыспен",
      "chips.fav": "Таңдаулылар",
      "sort.label": "Сұрыптау",
      "sort.default": "Әдепкі бойынша",
      "sort.priceAsc": "Баға: алдымен арзаны",
      "sort.priceDesc": "Баға: алдымен қымбаты",
      "sort.yearDesc": "Жыл: алдымен жаңалары",
      "filter.trans": "Беріліс қорабы",
      "filter.price": "Баға",
      "filter.body": "Шанақ",
      "filter.drive": "Жетек",
      "filter.any": "Кез келген",
      "filter.anyM": "Кез келген",
      "filter.reset": "Тазалау",
      "price.1": "2 млн ₸ дейін",
      "price.2": "2–3 млн ₸",
      "price.3": "3–5 млн ₸",
      "price.4": "5 млн ₸ бастап",
      "count": "Табылды: {n}",
      "empty": "Бұл сүзгі бойынша әзірге автомобиль жоқ. Сүзгілерді тазалаңыз немесе бізге жазыңыз — тапсырыспен таңдап береміз.",
      "empty.fav": "Таңдаулылар әзірге бос. Автомобиль карточкасындағы жүректі басыңыз — ол осында сақталады.",
      "catalog.note": "Бағалар мен жинақталымды менеджерден нақтылаңыз — қолда барлық күн сайын жаңарады.",

      "card.engine": "Қозғалтқыш",
      "card.trans": "Беріліс",
      "card.mileage": "Жүрісі",
      "card.body": "Шанақ",
      "card.more": "Толығырақ",
      "status.stock": "Қолда бар",
      "status.order": "Тапсырыспен",
      "fav.add": "Таңдаулыға",
      "fav.remove": "Таңдаулыдан алып тастау",
      "fav.in": "Таңдаулыда",

      "order.eyebrow": "Тапсырыс бойынша",
      "order.title": "Керек моделіңіз<br>қолда жоқ па?",
      "order.lead": "Бюджетіңіз мен талаптарыңызға сай автомобильді Корея, Қытай, БАӘ, Еуропа немесе Қазақстан нарығынан таңдап береміз.",
      "order.s1": "Өтінім",
      "order.s1p": "Қандай автомобиль керек екенін айтыңыз: маркасы, моделі, жылы, бюджеті.",
      "order.s2": "Іріктеу",
      "order.s2p": "Фотосуреттері, тарихы және Қазақстанға дейінгі қорытынды бағасы бар 2–3 нұсқа табамыз.",
      "order.s3": "Тексеру",
      "order.s3p": "Шанағын, жүрісін және құжаттарын тексереміз. Мәмілеге дейін есепті көрсетеміз.",
      "order.s4": "Рәсімдеу",
      "order.s4p": "Шарт, төлем, Көкшетауға жеткізу және есепке қою.",
      "order.cta": "Өтінім қалдыру",

      "credit.eyebrow": "Қаржыландыру",
      "credit.title": "Несие<br>және бөліп төлеу",
      "credit.lead": "Бюджетіңіз бен табысыңызға сай бағдарлама таңдауға көмектесеміз. Бірнеше банкпен жұмыс істейміз — бірнеше нұсқа ұсынып, айырмашылығын қарапайым тілмен түсіндіреміз.",
      "credit.t1": "Бірнеше серіктес банк — таңдауға мүмкіндік бар",
      "credit.t2": "Құжаттар мен өтінімге көмек",
      "credit.t3": "Бастапқы жарнамен бөліп төлеу және несие",
      "credit.t4": "Барлық төлемді қол қоюға дейін түсіндіреміз",
      "credit.cta": "Несиені есептеу",

      "tradein.eyebrow": "Trade-in",
      "tradein.title": "Автоңызды<br>үстеме ақымен ауыстырыңыз",
      "tradein.lead": "Автомобиліңізді сол күні бағалап, құнын жаңа көлік есебіне жаратамыз. Ұзақ сауда мен «сатып алушылардың» қоңырауларынсыз.",
      "tradein.t1": "Орнында тегін бағалау",
      "tradein.t2": "Құнын сатып алу есебіне жарату",
      "tradein.t3": "Құжаттарды бір келуде рәсімдеу",
      "tradein.cta": "Автомобильді бағалау",

      "sell.eyebrow": "Авто сату",
      "sell.title": "Көлігіңізді<br>KAZAUTO 03 арқылы сатыңыз",
      "sell.lead": "Форманы толтырып, суретті тіркеңіз — автомобиль деректерімен өтінім біздің WhatsApp-қа түседі. Сол күні бағалап, бағасын айтамыз.",
      "sell.t1": "Сурет пен сипаттама бойынша тегін бағалау",
      "sell.t2": "Сатып алу немесе маркет арқылы сату",
      "sell.t3": "Құжаттар мен рәсімдеуге көмектесеміз",
      "sell.note": "Форманы толтырғыңыз келмесе — WhatsApp-қа жазыңыз, жұмыс уақытында жауап береміз.",
      "sell.formTitle": "Сатуға өтінім",
      "sell.formSub": "Деректер мен сурет KAZAUTO 03 WhatsApp-ына жіберіледі",
      "sell.upload": "Автомобиль суретін қосу",
      "sell.uploadHint": "Файл таңдау үшін басыңыз · JPG, PNG 15 МБ дейін",
      "sell.photoAlt": "Автомобиль суреті",
      "sell.photoRemove": "Суретті жою",
      "field.brand": "Марка",
      "field.model": "Модель",
      "field.year": "Шыққан жылы",
      "field.mileage": "Жүрісі, км",
      "field.engine": "Қозғалтқыш",
      "field.trans": "Беріліс қорабы",
      "field.drive": "Жетек",
      "field.body": "Шанақ",
      "field.price": "Қалаған бағасы, ₸",
      "field.city": "Қала",
      "field.name": "Есіміңіз",
      "field.phone": "Телефон",
      "field.comment": "Түсініктеме",
      "field.commentPh": "Күйі, жинақталымы, маңызды мәліметтер",
      "field.enginePh": "2.0 л · бензин",
      "field.cityPh": "Көкшетау",
      "field.namePh": "Есім",
      "field.choose": "Таңдаңыз",
      "agree": "Дербес деректерді өңдеуге келісемін",
      "submit.sell": "WhatsApp-қа жіберу",
      "sell.formNote": "Дайын деректермен WhatsApp ашылады — «Жіберу» түймесін басу ғана қалады.",
      "success.title": "Өтінім дайын",
      "success.sellDefault": "WhatsApp-қа хабарлама жіберіңіз — сурет тіркелмесе, оны қосыңыз.",
      "openWa": "WhatsApp ашу",
      "savePhoto": "Суретті сақтау",

      "about.eyebrow": "Біз туралы",
      "about.lead": "Көкшетаудағы авто маркет: тексерілген жүрісі бар автомобильдер және жаңалары — тапсырыспен. Күн сайын 9:00-ден 20:00-ге дейін жұмыс істейміз.",
      "about.text": "Біз өзіміз тексерген автомобильдерді сатамыз: тарихын, шанақ күйін және құжаттарын қараймыз. Бірдеңе сай келмесе — мұндай автомобиль каталогқа кірмейді.",
      "about.i1": "Тексерілген автомобильдер",
      "about.i1s": "Мәмілеге дейін диагностика және заңды тазалық",
      "about.i2": "Несие және бөліп төлеу",
      "about.i2s": "Бағдарлама таңдап, құжаттарға көмектесеміз",
      "about.i3": "Trade-in",
      "about.i3s": "Автомобиліңізді бағалап, жаңа көлік есебіне жаратамыз",
      "about.i4": "Шоқан Уәлиханов көшесі, 1/3",
      "about.i4s": "Көкшетау, 020000",

      "faq.eyebrow": "Сұрақтар",
      "faq.title": "Бастысы<br>қысқаша",
      "faq.lead": "Жауап таппадыңыз ба — WhatsApp-қа жазыңыз, тез жауап береміз.",
      "faq.q1": "KAZAUTO 03-тен автомобильді қалай сатып алуға болады?",
      "faq.a1": "Каталогтан автомобиль таңдаңыз немесе бізге жазыңыз — нұсқа таңдап береміз. Көлікті бізде көріп, құжаттарын тексеріп, мәмілені рәсімдеңіз. Қажет болса, несие немесе trade-in бойынша көмектесеміз.",
      "faq.q2": "Несие немесе бөліп төлеу рәсімдеуге бола ма?",
      "faq.a2": "Иә. Біз бірнеше серіктес банкпен жұмыс істейміз және бюджетіңіз бен табысыңызға сай бағдарлама таңдаймыз. Құжаттарды жинауға көмектесеміз және қол қоюға дейін барлық шартты түсіндіреміз.",
      "faq.q3": "Автомобильді trade-in-ге қабылдайсыздар ма?",
      "faq.a3": "Иә. Автомобиліңізді сол күні бағалап, құнын жаңа көлік сатып алу есебіне жаратамыз. Бағалау тегін.",
      "faq.q4": "Қолда жоқ автоға тапсырыс беруге бола ма?",
      "faq.a4": "Иә. Автомобильдерді Корея, Қытай, БАӘ, Еуропа және Қазақстан нарығынан тапсырыспен таңдаймыз. Сіз фотосуреттері, тарихы және Қазақстанға дейінгі қорытынды бағасы бар нұсқаларды аласыз.",
      "faq.q5": "Қайда орналасқансыздар және қашан жұмыс істейсіздер?",
      "faq.a5": "Көкшетау, Шоқан Уәлиханов көшесі, 1/3 (АвтоЦОН жанында). Күн сайын 9:00-ден 20:00-ге дейін жұмыс істейміз. Телефон: 8 (777) 759 07 77.",

      "contacts.eyebrow": "Байланыс",
      "contacts.title": "Бізге<br>келіңіз",
      "contacts.lead": "Қоңырау шалыңыз немесе WhatsApp-қа жазыңыз — сұрақтарыңызға жауап береміз, қолда барлығын айтып, қарауға жазып қоямыз.",
      "contacts.callNote": "Қоңырау · күн сайын 9:00–20:00",
      "contacts.waNote": "Менеджерге жазу",
      "contacts.instaNote": "Instagram · жаңа түсімдер",
      "contacts.addr": "Шоқан Уәлиханов көшесі, 1/3",
      "contacts.addrNote": "Көкшетау, 020000 · АвтоЦОН жанында",
      "contacts.hours": "Күн сайын 9:00-ден 20:00-ге дейін",
      "contacts.hoursNote": "Демалыссыз",
      "contacts.map": "Картадан ашу",

      "lead.title": "Өтінім қалдыру",
      "lead.sub": "Қоңырау шалып, сұрақтарыңызға жауап береміз",
      "lead.name": "Есіміңіз кім?",
      "lead.namePh": "Есім",
      "lead.interest": "Нені қызықтырады?",
      "lead.choose": "Таңдаңыз",
      "lead.i1": "Қолда бар авто",
      "lead.i2": "Тапсырыс бойынша авто",
      "lead.i3": "Несие немесе бөліп төлеу",
      "lead.i4": "Trade-in",
      "lead.i5": "Басқа сұрақ",
      "lead.message": "Түсініктеме",
      "lead.messagePh": "Мысалы: Hyundai Tucson қызықтырады, бюджеті 9 млн-ға дейін, несие",
      "submit.lead": "Өтінім жіберу",
      "lead.note": "Жібергеннен кейін дайын хабарламамен WhatsApp ашылады.",
      "lead.noteEndpoint": "Форманы жіберу арқылы дербес деректерді өңдеуге келісесіз.",
      "lead.successTitle": "Рақмет! Өтінім дайын.",
      "lead.successText": "WhatsApp-қа хабарлама жіберіңіз — менеджер жұмыс уақытында жауап береді.",

      "footer.text": "Қолда бар және тапсырыс бойынша авто.<br>Несие, бөліп төлеу, trade-in.",
      "footer.copy": "© 2026 KAZAUTO 03. Демо сайт.",

      "modal.wa": "WhatsApp-қа жазу",
      "modal.call": "Қоңырау шалу",
      "modal.note": "Қолда барлығы мен жинақталымды менеджерден нақтылаңыз.",
      "modal.close": "Жабу",
      "modal.drive": "жетек",
      "modal.year": "Жылы",
      "modal.color": "Түсі",

      "unit.km": "км",
      "unit.liter": "л",
      "fuel.petrol": "бензин",
      "fuel.petrolGas": "бензин-газ",
      "fuel.diesel": "дизель",

      "val.Механика": "Механика",
      "val.Автомат": "Автомат",
      "val.Вариатор": "Вариатор",
      "val.Робот": "Робот",
      "val.Седан": "Седан",
      "val.Хэтчбек": "Хэтчбек",
      "val.Кроссовер": "Кроссовер",
      "val.Минивэн": "Минивэн",
      "val.Внедорожник": "Жол талғамайтын",
      "val.Универсал": "Универсал",
      "val.Купе": "Купе",
      "val.Передний": "Алдыңғы",
      "val.Задний": "Артқы",
      "val.Полный": "Толық",

      "msg.car": "Сәлеметсіз бе! {car}, {year} ж. қызықтырады. Қолда барлығы мен шарттарын айта аласыз ба?",
      "msg.leadHeader": "KAZAUTO 03 сайтынан өтінім",
      "msg.name": "Есім",
      "msg.phone": "Телефон",
      "msg.interest": "Қызықтырады",
      "msg.comment": "Түсініктеме",
      "msg.sellHeader": "KAZAUTO 03 сайтынан авто сатуға өтінім",
      "msg.carLabel": "Автомобиль",
      "msg.mileage": "Жүрісі",
      "msg.engine": "Қозғалтқыш",
      "msg.trans": "Беріліс",
      "msg.drive": "Жетек",
      "msg.body": "Шанақ",
      "msg.price": "Баға",
      "msg.city": "Қала",
      "msg.photo": "Сурет: чатқа тіркеймін",
      "msg.notSpecified": "Көрсетілмеген",

      "err.brand": "Маркасын көрсетіңіз",
      "err.model": "Моделін көрсетіңіз",
      "err.name": "Есіміңізді жазыңыз",
      "err.name2": "Есімді көрсетіңіз — кемінде 2 таңба",
      "err.phone": "Телефон нөмірін толық енгізіңіз",
      "err.agree": "Деректерді өңдеуге келісім қажет",
      "err.photoType": "Сурет файлы қажет: JPG, PNG немесе HEIC",
      "err.photoSize": "Сурет 15 МБ-тан үлкен — кішірек файл таңдаңыз",
      "send.sending": "Жіберілуде…",
      "lead.sent": "Өтінім жіберілді. Менеджер жұмыс уақытында хабарласады.",
      "lead.fallback": "Автоматты түрде жіберу мүмкін болмады. Өтінімді WhatsApp-қа жіберіңіз — менеджер жұмыс уақытында жауап береді.",
      "sell.shared": "Сурет пен деректер WhatsApp-қа жіберілді. Чат ашылмаса — төмендегі түймені басыңыз.",
      "sell.addPhoto": "Деректер WhatsApp-қа жіберілді. Суретті чатқа тіркеңіз — немесе төмендегі түймемен сақтаңыз."
    },

    en: {
      "meta.title": "KAZAUTO 03 — car market in Kokshetau: cars in stock and on order",
      "meta.desc": "KAZAUTO 03 — car market in Kokshetau. Verified cars in stock and on order. Credit, instalments, trade-in, car buyout. Daily 9:00–20:00. 1/3 Shokan Ualikhanov St.",

      "aria.home": "KAZAUTO 03 — back to top",
      "aria.nav": "Main navigation",
      "aria.filterStatus": "Filter by availability",
      "aria.footerNav": "Footer navigation",
      "img.hero": "Hyundai Tucson at the KAZAUTO 03 car market",
      "img.credit": "Car credit application",
      "img.tradein": "Car trade-in",

      "top.address": "Kokshetau, 1/3 Shokan Ualikhanov St.",
      "top.hours": "Daily 9:00–20:00",

      "logo.sub": "car market · Kokshetau",
      "nav.cars": "Cars in stock",
      "nav.order": "On order",
      "nav.sell": "Sell your car",
      "nav.credit": "Credit",
      "nav.tradein": "Trade-in",
      "nav.contacts": "Contacts",
      "header.fav": "Favorites",
      "header.write": "Message",
      "header.menuOpen": "Open menu",
      "header.menuClose": "Close menu",
      "lang.label": "Site language",

      "hero.eyebrow": "Car market in Kokshetau",
      "hero.title": "Cars <span class=\"accent\">in stock</span><br>and on order",
      "hero.lead": "Verified cars with a transparent history. We help with credit, instalments and trade-in — all arranged on site.",
      "hero.cta": "Browse cars",
      "hero.note": "cars in stock",
      "hero.stat1": "Verified cars",
      "hero.stat1s": "inspection and clean paperwork",
      "hero.stat2": "Credit & instalments",
      "hero.stat2s": "a plan that fits you",
      "hero.stat3s": "open every day",

      "catalog.eyebrow": "Catalog",
      "catalog.title": "Cars<br>in stock",
      "catalog.aside": "Current cars at our Kokshetau car market. Can't find the right model? We'll source it to order within your budget.",
      "catalog.asideLink": "Cars on order",
      "chips.all": "All",
      "chips.stock": "In stock",
      "chips.order": "On order",
      "chips.fav": "Favorites",
      "sort.label": "Sort",
      "sort.default": "Default",
      "sort.priceAsc": "Price: low to high",
      "sort.priceDesc": "Price: high to low",
      "sort.yearDesc": "Year: newest first",
      "filter.trans": "Transmission",
      "filter.price": "Price",
      "filter.body": "Body",
      "filter.drive": "Drivetrain",
      "filter.any": "Any",
      "filter.anyM": "Any",
      "filter.reset": "Reset",
      "price.1": "up to ₸2M",
      "price.2": "₸2–3M",
      "price.3": "₸3–5M",
      "price.4": "from ₸5M",
      "count": "Found: {n}",
      "empty": "No cars match this filter yet. Reset the filters or message us — we'll source one to order.",
      "empty.fav": "Your favorites are empty. Tap the heart on a car card to save it here.",
      "catalog.note": "Check prices and trims with a manager — stock is updated daily.",

      "card.engine": "Engine",
      "card.trans": "Gearbox",
      "card.mileage": "Mileage",
      "card.body": "Body",
      "card.more": "Details",
      "status.stock": "In stock",
      "status.order": "On order",
      "fav.add": "Add to favorites",
      "fav.remove": "Remove from favorites",
      "fav.in": "In favorites",

      "order.eyebrow": "On order",
      "order.title": "Can't find the model<br>you need?",
      "order.lead": "We'll find a car to match your budget and needs — from Korea, China, the UAE, Europe or the Kazakh market.",
      "order.s1": "Request",
      "order.s1p": "Tell us what you need: make, model, year, budget.",
      "order.s2": "Sourcing",
      "order.s2p": "We'll find 2–3 options with photos, history and a final price to Kazakhstan.",
      "order.s3": "Inspection",
      "order.s3p": "We check the body, mileage and paperwork and show the report before the deal.",
      "order.s4": "Paperwork",
      "order.s4p": "Contract, payment, delivery to Kokshetau and registration.",
      "order.cta": "Send a request",

      "credit.eyebrow": "Financing",
      "credit.title": "Credit<br>and instalments",
      "credit.lead": "We'll help you choose a plan that fits your budget and income. We work with several banks — we'll offer a few options and explain the difference in plain words.",
      "credit.t1": "Several partner banks — plenty to choose from",
      "credit.t2": "Help with documents and the application",
      "credit.t3": "Instalments and credit with a down payment",
      "credit.t4": "All payments explained before you sign",
      "credit.cta": "Calculate credit",

      "tradein.eyebrow": "Trade-in",
      "tradein.title": "Trade in your car<br>and pay the difference",
      "tradein.lead": "We value your car the same day and offset it against a new one. No long sales and no calls from 'buyers'.",
      "tradein.t1": "Free on-site valuation",
      "tradein.t2": "Value offset against your purchase",
      "tradein.t3": "Paperwork in a single visit",
      "tradein.cta": "Value my car",

      "sell.eyebrow": "Sell your car",
      "sell.title": "Sell your car<br>through KAZAUTO 03",
      "sell.lead": "Fill in the form and attach a photo — the request with your car details goes straight to our WhatsApp. We'll value it and name a price the same day.",
      "sell.t1": "Free valuation from photos and description",
      "sell.t2": "Buyout or sale through the market",
      "sell.t3": "Help with paperwork and registration",
      "sell.note": "Don't want to fill in a form? Just message us on WhatsApp — we reply during working hours.",
      "sell.formTitle": "Sell request",
      "sell.formSub": "Details and photo go to KAZAUTO 03 on WhatsApp",
      "sell.upload": "Add a car photo",
      "sell.uploadHint": "Tap to choose a file · JPG, PNG up to 15 MB",
      "sell.photoAlt": "Car photo",
      "sell.photoRemove": "Remove photo",
      "field.brand": "Make",
      "field.model": "Model",
      "field.year": "Year",
      "field.mileage": "Mileage, km",
      "field.engine": "Engine",
      "field.trans": "Gearbox",
      "field.drive": "Drivetrain",
      "field.body": "Body",
      "field.price": "Asking price, ₸",
      "field.city": "City",
      "field.name": "Your name",
      "field.phone": "Phone",
      "field.comment": "Comment",
      "field.commentPh": "Condition, trim, anything important",
      "field.enginePh": "2.0 L · petrol",
      "field.cityPh": "Kokshetau",
      "field.namePh": "Name",
      "field.choose": "Select",
      "agree": "I agree to the processing of my personal data",
      "submit.sell": "Send via WhatsApp",
      "sell.formNote": "WhatsApp opens with the details ready — just tap Send.",
      "success.title": "Request ready",
      "success.sellDefault": "Send the message on WhatsApp — and attach the photo if it wasn't attached.",
      "openWa": "Open WhatsApp",
      "savePhoto": "Save photo",

      "about.eyebrow": "About us",
      "about.lead": "A car market in Kokshetau: verified used cars and new ones to order. Open daily from 9:00 to 20:00.",
      "about.text": "We sell cars we have checked ourselves: history, body condition and paperwork. If something doesn't add up, the car never makes it into the catalog.",
      "about.i1": "Verified cars",
      "about.i1s": "Inspection and clean title before the deal",
      "about.i2": "Credit & instalments",
      "about.i2s": "We'll find a plan and help with the paperwork",
      "about.i3": "Trade-in",
      "about.i3s": "We value your car and offset it against a new one",
      "about.i4": "1/3 Shokan Ualikhanov St.",
      "about.i4s": "Kokshetau, 020000",

      "faq.eyebrow": "FAQ",
      "faq.title": "The essentials<br>in brief",
      "faq.lead": "No answer found? Message us on WhatsApp — we reply fast.",
      "faq.q1": "How do I buy a car at KAZAUTO 03?",
      "faq.a1": "Pick a car in the catalog or message us — we'll help you choose. See the car with us, check the paperwork and complete the deal. If needed, we'll help with credit or trade-in.",
      "faq.q2": "Can I get credit or instalments?",
      "faq.a2": "Yes. We work with several partner banks and choose a plan to fit your budget and income. We help collect the documents and explain all the terms before you sign.",
      "faq.q3": "Do you accept trade-ins?",
      "faq.a3": "Yes. We value your car the same day and offset its price against your new purchase. The valuation is free.",
      "faq.q4": "Can I order a car that's not in stock?",
      "faq.a4": "Yes. We source cars to order from Korea, China, the UAE, Europe and the Kazakh market. You get options with photos, history and a final price to Kazakhstan.",
      "faq.q5": "Where are you and when are you open?",
      "faq.a5": "Kokshetau, 1/3 Shokan Ualikhanov St. (next to the AutoTson). Open daily from 9:00 to 20:00. Phone: 8 (777) 759 07 77.",

      "contacts.eyebrow": "Contacts",
      "contacts.title": "Come<br>and see us",
      "contacts.lead": "Call or message us on WhatsApp — we'll answer questions, check availability and book a viewing.",
      "contacts.callNote": "Call · daily 9:00–20:00",
      "contacts.waNote": "Message a manager",
      "contacts.instaNote": "Instagram · new arrivals",
      "contacts.addr": "1/3 Shokan Ualikhanov St.",
      "contacts.addrNote": "Kokshetau, 020000 · next to the AutoTson",
      "contacts.hours": "Daily 9:00–20:00",
      "contacts.hoursNote": "No days off",
      "contacts.map": "Open in maps",

      "lead.title": "Send a request",
      "lead.sub": "We'll call back and answer your questions",
      "lead.name": "Your name",
      "lead.namePh": "Name",
      "lead.interest": "What are you interested in?",
      "lead.choose": "Select",
      "lead.i1": "Cars in stock",
      "lead.i2": "Cars on order",
      "lead.i3": "Credit or instalments",
      "lead.i4": "Trade-in",
      "lead.i5": "Other question",
      "lead.message": "Comment",
      "lead.messagePh": "E.g. interested in a Hyundai Tucson, budget up to ₸9M, credit",
      "submit.lead": "Send request",
      "lead.note": "WhatsApp will open with the message ready to send.",
      "lead.noteEndpoint": "By submitting the form you agree to the processing of personal data.",
      "lead.successTitle": "Thank you! Your request is ready.",
      "lead.successText": "Send the message on WhatsApp — a manager will reply during working hours.",

      "footer.text": "Cars in stock and on order.<br>Credit, instalments, trade-in.",
      "footer.copy": "© 2026 KAZAUTO 03. Demo website.",

      "modal.wa": "Message on WhatsApp",
      "modal.call": "Call",
      "modal.note": "Check availability and trim with a manager.",
      "modal.close": "Close",
      "modal.drive": "drive",
      "modal.year": "Year",
      "modal.color": "Colour",

      "unit.km": "km",
      "unit.liter": "L",
      "fuel.petrol": "petrol",
      "fuel.petrolGas": "petrol-gas",
      "fuel.diesel": "diesel",

      "val.Механика": "Manual",
      "val.Автомат": "Automatic",
      "val.Вариатор": "CVT",
      "val.Робот": "Robot",
      "val.Седан": "Sedan",
      "val.Хэтчбек": "Hatchback",
      "val.Кроссовер": "Crossover",
      "val.Минивэн": "Minivan",
      "val.Внедорожник": "SUV",
      "val.Универсал": "Estate",
      "val.Купе": "Coupe",
      "val.Передний": "Front",
      "val.Задний": "Rear",
      "val.Полный": "All-wheel",

      "msg.car": "Hello! I'm interested in the {car}, {year}. Could you tell me about availability and terms?",
      "msg.leadHeader": "Request from the KAZAUTO 03 website",
      "msg.name": "Name",
      "msg.phone": "Phone",
      "msg.interest": "Interested in",
      "msg.comment": "Comment",
      "msg.sellHeader": "Car sale request from the KAZAUTO 03 website",
      "msg.carLabel": "Car",
      "msg.mileage": "Mileage",
      "msg.engine": "Engine",
      "msg.trans": "Gearbox",
      "msg.drive": "Drivetrain",
      "msg.body": "Body",
      "msg.price": "Price",
      "msg.city": "City",
      "msg.photo": "Photo: attaching in the chat",
      "msg.notSpecified": "Not specified",

      "err.brand": "Enter the make",
      "err.model": "Enter the model",
      "err.name": "What should we call you?",
      "err.name2": "Enter your name — at least 2 characters",
      "err.phone": "Enter your full phone number",
      "err.agree": "Consent is required",
      "err.photoType": "An image file is required: JPG, PNG or HEIC",
      "err.photoSize": "The photo is over 15 MB — choose a smaller file",
      "send.sending": "Sending…",
      "lead.sent": "Request sent. A manager will contact you during working hours.",
      "lead.fallback": "Automatic sending failed. Send the request on WhatsApp — a manager will reply during working hours.",
      "sell.shared": "Photo and details were shared to WhatsApp. If the chat didn't open, use the button below.",
      "sell.addPhoto": "Details sent to WhatsApp. Attach the photo in the chat — or save it with the button below."
    }
  };

  var STORAGE_KEY = "kazauto03_lang";
  var lang = "ru";

  try {
    var saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && DICT[saved]) lang = saved;
  } catch (e) {}

  function dict() {
    return DICT[lang] || DICT.ru;
  }

  function t(key, vars) {
    var value = dict()[key];
    if (value == null) value = DICT.ru[key];
    if (value == null) return key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        value = value.split("{" + name + "}").join(vars[name]);
      });
    }
    return value;
  }

  function replaceTextNodes(el, text) {
    var nodes = [];
    Array.prototype.forEach.call(el.childNodes, function (node) {
      if (node.nodeType === 3 && node.nodeValue.trim()) nodes.push(node);
    });
    if (!nodes.length) {
      el.appendChild(document.createTextNode(text));
      return;
    }
    nodes[nodes.length - 1].nodeValue = " " + text;
  }

  function apply() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-text]").forEach(function (el) {
      replaceTextNodes(el, t(el.getAttribute("data-i18n-text")));
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    document.title = t("meta.title");

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.desc"));

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("meta.title"));

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("hero.lead"));

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("kazauto:lang", { detail: { lang: lang } }));
  }

  function setLang(next) {
    if (!DICT[next] || next === lang) return;
    lang = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    apply();
  }

  function getLang() {
    return lang;
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang]");
    if (!btn) return;
    e.preventDefault();
    setLang(btn.getAttribute("data-lang"));
  });

  window.KZ = { t: t, apply: apply, setLang: setLang, getLang: getLang, dict: DICT };

  // Разметка уже загружена: i18n.js подключается в конце body.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
