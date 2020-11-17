'use strict';

(function () {
  let users = [];
  let OFFER_TITLES = ['Я здесь живу', 'Срочно сдаю', 'Съеду на время', 'Жду вашего звонка'];
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
  const AUTHOR_USED_AVATARS = [];

  window.data = {
    createUser: function () {
      // Avatar creation
      const author = {};

      author.avatar = 'img/avatars/user0' + window.util.getExclusiveNum(AUTHOR_USED_AVATARS) + '.png';
      // Offer creation
      const offer = {};
      offer.title = OFFER_TITLES[window.util.randomNum(0, OFFER_TITLES.length - 1)];
      offer.address = window.util.randomNum(OFFER_ADDRESS_MIN, OFFER_ADDRESS_MAX) + ', ' + window.util.randomNum(OFFER_ADDRESS_MIN, OFFER_ADDRESS_MAX);
      offer.price = window.util.randomNum(OFFER_PRICE_MIN, OFFER_PRICE_MAX);
      offer.type = OFFER_TYPE[window.util.randomNum(0, OFFER_TYPE.length - 1)];
      offer.rooms = window.util.randomNum(1, 6);
      offer.guests = window.util.randomNum(1, 8);
      offer.checkin = OFFER_CHECK_IN_AND_OUT[window.util.randomNum(0, OFFER_CHECK_IN_AND_OUT.length - 1)];
      offer.checkout = OFFER_CHECK_IN_AND_OUT[window.util.randomNum(0, OFFER_CHECK_IN_AND_OUT.length - 1)];

      offer.features = [];
      for (let i = 0; i < window.util.randomNum(0, OFFER_FEATURES.length - 1); i++) {
        offer.features[i] = OFFER_FEATURES[i];
      }

      offer.description = OFFER_DESCRIPTION[window.util.randomNum(0, OFFER_DESCRIPTION.length - 1)];

      offer.photos = [];
      for (let i = 0; i < window.util.randomNum(0, OFFER_PHOTOS.length - 1); i++) {
        offer.photos[i] = OFFER_PHOTOS[i];
      }

      // Создание локации
      const location = {};
      location.x = window.util.randomNum(0, innerWidth);
      location.y = window.util.randomNum(LOCATION_Y_MIN, LOCATION_Y_MAX);

      const obj = {
        author,
        offer,
        location
      };

      return obj;
    }
  };

  window.users = users;
})();
