'use strict';

(function () {
  let OFFER_TITLE = ['Я здесь живу', 'Срочно сдаю', 'Съеду на время', 'Жду вашего звонка'];
  const OFFER_PRICE_MIN = 200;
  const OFFER_PRICE_MAX = 1000;
  const OFFER_ADDRESS_MIN = 100;
  const OFFER_ADDRESS_MAX = 800;
  let OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow'];
  let OFFER_CHECK_IN_AND_OUT = ['12:00', '13:00', '14:00'];
  let OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  let OFFER_DESCRIPTION = ['Заходи и живи', 'Новый азиатский ремонт', 'Чувствуйте себя как дома', 'Сдаю посуточно'];
  let OFFER_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  const LOCATION_Y_MIN = 130;
  const LOCATION_Y_MAX = 630;
  const USERS_AMOUNT = 8;
  let AUTHOR_USED_AVATARS = [];

  // Создание случайного числа по минимальному и максимальному значению
  const randomNum = function (min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
  };

  const getExclusiveNum = function (arr) {
    let currentNum = randomNum(1, 8);

    while (arr.includes(currentNum)) {
      currentNum = randomNum(1, 8);
    }

    arr.push(currentNum);
    return currentNum;
  };

  const createUser = function () {
    // Avatar creation
    const author = {};

    author.avatar = 'img/avatars/user0' + getExclusiveNum(AUTHOR_USED_AVATARS) + '.png';
    // Offer creation
    const offer = {};
    offer.title = OFFER_TITLE[randomNum(0, OFFER_TITLE.length)];
    offer.address = randomNum(OFFER_ADDRESS_MIN, OFFER_ADDRESS_MAX) + ', ' + randomNum(OFFER_ADDRESS_MIN, OFFER_ADDRESS_MAX);
    offer.price = randomNum(OFFER_PRICE_MIN, OFFER_PRICE_MAX);
    offer.type = OFFER_TYPE[randomNum(OFFER_TYPE.length)];
    offer.rooms = randomNum(1, 6);
    offer.guests = randomNum(1, 8);
    offer.checkin = OFFER_CHECK_IN_AND_OUT[randomNum(0, OFFER_CHECK_IN_AND_OUT.length)];
    offer.checkout = OFFER_CHECK_IN_AND_OUT[randomNum(0, OFFER_CHECK_IN_AND_OUT.length)];

    offer.features = [];
    for (let i = 0; i < randomNum(0, OFFER_FEATURES.length); i++) {
      offer.features[i] = OFFER_FEATURES[i];
    }

    offer.description = OFFER_DESCRIPTION[randomNum(0, OFFER_DESCRIPTION.length)];

    offer.photos = [];
    for (let i = 0; i < randomNum(0, OFFER_PHOTOS.length); i++) {
      offer.photos[i] = OFFER_PHOTOS[i];
    }

    // Создание локации
    const location = {};
    location.x = randomNum(0, innerWidth);
    location.y = randomNum(LOCATION_Y_MIN, LOCATION_Y_MAX);

    const obj = {
      author,
      offer,
      location
    };

    return obj;
  };

  // Создание пользователей
  for (let i = 0; i < USERS_AMOUNT; i++) {
    window.users.push(createUser());
  }
})();
