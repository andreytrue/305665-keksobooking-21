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

  window.POINT_WIDTH_END = POINT_WIDTH_END;
  window.POINT_HEIGHT_END = POINT_HEIGHT_END;
})();
