'use strict';

(function () {
  const intercativeElements = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  const intercativeForm = intercativeElements.querySelectorAll('fieldset');
  const mapForm = mapFilters.querySelectorAll('fieldset');
  const map = document.querySelector('.map');
  const filtersContainer = map.querySelector('.map__filters-container');
  let pageIsAstive = false;

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
        pageIsAstive = true;
      }
      for (let i = 0; i < mapForm.length; i++) {
        mapForm[i].disabled = false;
        pageIsAstive = true;
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
      pageIsAstive = true;
      map.classList.remove('map--faded');
      window.form.addAddress(window.POINT_WIDTH_END, window.POINT_HEIGHT_END);
      addForm.classList.remove('ad-form--disabled');

      window.load(onSuccess, onError);
    }
  });

  // Активация страницы через Enter
  pageActivation.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      activateElemets(false);
      pageIsAstive = true;
      map.classList.remove('map--faded');
      window.form.addAddress(window.POINT_WIDTH_END, window.POINT_HEIGHT_END);
      addForm.classList.remove('ad-form--disabled');

      window.load(onSuccess, onError);
      window.message.showSuccess();
    }
  });

  const onSuccess = function (data) {
    setData(data);
    rerenderPins();
  };

  const onError = function (data) {
    window.message.showError(data);
  };

  const getActiveStatus = function () {
    return pageIsAstive;
  };

  const setData = function (data) {
    window.users = data;
  };

  const rerenderPins = function () {
    window.card.closeCard();
    window.pin.removePins();
    window.pin.renderPins(window.users);
  };

  window.main = {
    getActiveStatus: getActiveStatus
  };

  window.map = map;
  window.filtersContainer = filtersContainer;
  window.intercativeElements = intercativeElements;
})();
