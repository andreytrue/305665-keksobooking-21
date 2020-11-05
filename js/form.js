'use strict';

(function () {
  // Размеры метки
  const POINT_WIDTH = 40;
  const POINT_HEIGHT = 44;
  const POINT_WIDTH_END = 10;
  const POINT_HEIGHT_END = 22;

  // Добавление адреса метки
  const pointPosition = document.querySelector('.map__pin');
  const onAddress = document.querySelector('#address');

  window.form = {
    addAddress: function (pWidthEnd, pHeightEnd) {
      const x = Number(pointPosition.style.left.replace(/px/g, ''));
      const y = Number(pointPosition.style.top.replace(/px/g, ''));
      onAddress.value = Math.floor(x + (POINT_WIDTH + pWidthEnd / 2)) + ', ' + Math.floor(y + POINT_HEIGHT + pHeightEnd);
    }
  };

  window.form.addAddress(0, 0);

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

  window.POINT_WIDTH_END = POINT_WIDTH_END;
  window.POINT_HEIGHT_END = POINT_HEIGHT_END;
})();
