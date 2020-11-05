'use strict';

(function () {
  const users = [];
  const USERS_AMOUNT = 8;
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
  let AUTHOR_USED_AVATARS = [];

  const intercativeElements = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  const intercativeForm = intercativeElements.querySelectorAll('fieldset');
  const mapForm = mapFilters.querySelectorAll('fieldset');
  const map = document.querySelector('.map');

  const activateElemets = function (disable) {
    if (disable) {
      for (let i = 0; i < intercativeForm.length; i++) {
        intercativeForm[i].disabled = true;
      }
      for (let i = 0; i < mapForm.length; i++) {
        mapForm[i].disabled = true;
      }
    } else {
      for (let i = 0; i < intercativeForm.length; i++) {
        intercativeForm[i].disabled = false;
      }
      for (let i = 0; i < mapForm.length; i++) {
        mapForm[i].disabled = false;
      }
    }
  };

  activateElemets(true);

  // Активация страницы через нажатие левой кнопкой мыши
  const pageActivation = document.querySelector('.map__pin--main');
  const addForm = document.querySelector('.ad-form');

  pageActivation.addEventListener('mousedown', function (evt) {
    if (evt.buttons === 1) {
      activateElemets(false);
      map.classList.remove('map--faded');
      window.mapPins.append(window.insertPins());
      window.addAddress();
      addForm.classList.remove('ad-form--disabled');
    }
  });

  // Активация страницы через Enter
  pageActivation.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      activateElemets(false);
      map.classList.remove('map--faded');
      window.mapPins.append(window.pin.insertPins());
      window.form.addAddress(window.POINT_WIDTH_END, window.POINT_HEIGHT_END);
      addForm.classList.remove('ad-form--disabled');
    }
  });

  window.users = users;
  window.USERS_AMOUNT = USERS_AMOUNT;
  window.OFFER_TITLE = OFFER_TITLE;
  window.OFFER_PRICE_MIN = OFFER_PRICE_MIN;
  window.OFFER_PRICE_MAX = OFFER_PRICE_MAX;
  window.OFFER_ADDRESS_MIN = OFFER_ADDRESS_MIN;
  window.OFFER_ADDRESS_MAX = OFFER_ADDRESS_MAX;
  window.OFFER_TYPE = OFFER_TYPE;
  window.OFFER_CHECK_IN_AND_OUT = OFFER_CHECK_IN_AND_OUT;
  window.OFFER_FEATURES = OFFER_FEATURES;
  window.OFFER_DESCRIPTION = OFFER_DESCRIPTION;
  window.OFFER_PHOTOS = OFFER_PHOTOS;
  window.LOCATION_Y_MIN = LOCATION_Y_MIN;
  window.LOCATION_Y_MAX = LOCATION_Y_MAX;
  window.AUTHOR_USED_AVATARS = AUTHOR_USED_AVATARS;
})();
