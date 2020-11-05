'use strict';

(function () {
  const users = [];

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
})();
