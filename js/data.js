'use strict';

(function () {
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

    author.avatar = 'img/avatars/user0' + getExclusiveNum(window.AUTHOR_USED_AVATARS) + '.png';
    // Offer creation
    const offer = {};
    offer.title = window.OFFER_TITLE[randomNum(0, window.OFFER_TITLE.length)];
    offer.address = randomNum(window.OFFER_ADDRESS_MIN, window.OFFER_ADDRESS_MAX) + ', ' + randomNum(window.OFFER_ADDRESS_MIN, window.OFFER_ADDRESS_MAX);
    offer.price = randomNum(window.OFFER_PRICE_MIN, window.OFFER_PRICE_MAX);
    offer.type = window.OFFER_TYPE[randomNum(window.OFFER_TYPE.length)];
    offer.rooms = randomNum(1, 6);
    offer.guests = randomNum(1, 8);
    offer.checkin = window.OFFER_CHECK_IN_AND_OUT[randomNum(0, window.OFFER_CHECK_IN_AND_OUT.length)];
    offer.checkout = window.OFFER_CHECK_IN_AND_OUT[randomNum(0, window.OFFER_CHECK_IN_AND_OUT.length)];

    offer.features = [];
    for (let i = 0; i < randomNum(0, window.OFFER_FEATURES.length); i++) {
      offer.features[i] = window.OFFER_FEATURES[i];
    }

    offer.description = window.OFFER_DESCRIPTION[randomNum(0, window.OFFER_DESCRIPTION.length)];

    offer.photos = [];
    for (let i = 0; i < randomNum(0, window.OFFER_PHOTOS.length); i++) {
      offer.photos[i] = window.OFFER_PHOTOS[i];
    }

    // Создание локации
    const location = {};
    location.x = randomNum(0, innerWidth);
    location.y = randomNum(window.LOCATION_Y_MIN, window.LOCATION_Y_MAX);

    const obj = {
      author,
      offer,
      location
    };

    return obj;
  };

  // Создание пользователей
  for (let i = 0; i < window.USERS_AMOUNT; i++) {
    window.users.push(createUser());
  }
})();
