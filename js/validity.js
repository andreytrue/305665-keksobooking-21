'use strict';

(function () {
  // Валидация формы
  const adForm = document.querySelector('.ad-form');
  const title = adForm.querySelector('#title');
  title.required = true;

  // Проверка поля заголовка нового объявления
  const TITLE_MIN_LENGTH = 30;
  const TITLE_MAX_LENGTH = 100;

  title.addEventListener('input', function () {
    const valueLength = title.value.length;

    if (valueLength < TITLE_MIN_LENGTH) {
      title.setCustomValidity('Не хватает ' + (TITLE_MIN_LENGTH - valueLength) + ' символов');
    } else if (valueLength > TITLE_MAX_LENGTH) {
      title.setCustomValidity('Удалить лишние ' + (TITLE_MAX_LENGTH - valueLength) + ' символов');
    } else {
      title.setCustomValidity('');
    }

    title.reportValidity();
  });

  // Проверка стоимость жилья за ночь
  const price = adForm.querySelector('#price');
  const type = adForm.querySelector('#type');
  price.required = true;
  const PRICE_VALUE_MAX = 1000000;

  const PLACE_MIN_PRICE_BUNGALO = 0;
  const PLACE_MIN_PRICE_FLAT = 1000;
  const PLACE_MIN_PRICE_HOUSE = 5000;
  const PLACE_MIN_PRICE_PALACE = 10000;

  // Зависимость поля placeholder цены от типа жилья
  const pricePlaceholder = function (placeType) {
    if (placeType.value === 'flat') {
      price.placeholder = PLACE_MIN_PRICE_FLAT;
    } else if (placeType.value === 'house') {
      price.placeholder = PLACE_MIN_PRICE_HOUSE;
    } else if (placeType.value === 'palace') {
      price.placeholder = PLACE_MIN_PRICE_PALACE;
    } else if (placeType.value === 'bungalow') {
      price.placeholder = PLACE_MIN_PRICE_BUNGALO;
    }
  };

  type.addEventListener('input', function () {
    const placeType = type.querySelectorAll('option');

    for (let i = 0; i < placeType.length; i++) {
      if (placeType[i].selected) {
        pricePlaceholder(placeType[i]);
      }
    }
  });

  // Зависимость минимальной цены за ночь от типа жилья
  const minPrice = function (placeType) {
    let minValue = 0;

    if (placeType === 'flat') {
      minValue = PLACE_MIN_PRICE_FLAT;
    } else if (placeType === 'house') {
      minValue = PLACE_MIN_PRICE_HOUSE;
    } else if (placeType === 'palace') {
      minValue = PLACE_MIN_PRICE_PALACE;
    } else if (placeType === 'bungalo') {
      minValue = PLACE_MIN_PRICE_BUNGALO;
    }

    return minValue;
  };

  price.addEventListener('input', function () {
    const value = price.value;
    const placeType = type.querySelector('option[selected]');

    if (value < minPrice(placeType.value)) {
      price.setCustomValidity('Минимальная цена за одну ночь ' + minPrice(placeType.value) + ' иен');
    } else if (value > PRICE_VALUE_MAX) {
      price.setCustomValidity('Цены за ночь в нашем городе стоят меньше 1 000 000');
    }

    if (!value.match(/^\d+$/)) {
      price.setCustomValidity('Используйте только цифры для стоимости за ночь');
    }

    price.reportValidity();
  });

  // Пользователь не может изменять поле адреса самостоятельно
  const address = adForm.querySelector('#address');
  address.disabled = true;

  // Синхронизация времени выезда и заезда
  const timeIn = adForm.querySelector('#timein');
  const timeInOptions = timeIn.querySelectorAll('option');
  const timeOut = adForm.querySelector('#timeout');
  const timeOutOptions = timeOut.querySelectorAll('option');

  timeIn.addEventListener('input', function () {
    for (let i = 0; i < timeInOptions.length; i++) {
      if (timeInOptions[i].selected) {
        timeOutOptions[i].selected = true;
      }
    }
  });

  timeOut.addEventListener('input', function () {
    for (let i = 0; i < timeOutOptions.length; i++) {
      if (timeOutOptions[i].selected) {
        timeInOptions[i].selected = true;
      }
    }
  });

  // Связности количества гостей и количества комнат
  const housingGuests = document.querySelector('#capacity');
  const housingRooms = document.querySelector('#room_number');

  housingGuests.addEventListener('change', function () {
    const guestsAmount = Number(housingGuests[housingGuests.selectedIndex].value);

    for (let i = 0; i < housingRooms.length; i++) {
      if (guestsAmount > housingRooms[i].value || guestsAmount === 0) {
        housingRooms[i].setAttribute('disabled', 'true');
      } else {
        housingRooms[i].removeAttribute('disabled');
      }
    }
  });

  housingRooms.addEventListener('change', function () {
    const roomsAmount = Number(housingRooms[housingRooms.selectedIndex].value);

    for (let i = 0; i < housingGuests.length; i++) {
      if (roomsAmount < housingGuests[i].value) {
        housingGuests[i].setAttribute('disabled', 'true');
      } else if (roomsAmount === 100 || Number(housingGuests[i].value) === 0) {
        housingGuests[i].setAttribute('disabled', 'true');
      } else {
        housingGuests[i].removeAttribute('disabled');
      }
    }
  });

  // Значением полей «Ваша фотография» и «Фотография жилья» может быть только изображение.
  const avatar = adForm.querySelector('#avatar');
  avatar.accept = 'image/png, image/jpeg';
  const images = adForm.querySelector('#images');
  images.accept = 'image/png, image/jpeg';
})();
