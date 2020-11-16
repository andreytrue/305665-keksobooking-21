'use strict';

(function () {
  const mainPin = document.querySelector('.map__pin--main');
  const PIN_HEIGHT = 18;

  const getMainPinPosition = function () {
    if (window.main.getActiveStatus()) {
      return {
        x: mainPin.offsetLeft + mainPin.offsetWidth / 2,
        y: mainPin.offsetTop + mainPin.offsetHeight + PIN_HEIGHT
      };
    } else {
      return {
        x: mainPin.offsetLeft + mainPin.offsetWidth / 2,
        y: mainPin.offsetTop + mainPin.offsetHeight / 2
      };
    }
  };

  const setMainPinPosition = function (x, y) {
    mainPin.style.top = (y - mainPin.offsetHeight - PIN_HEIGHT) + `px`;
    mainPin.style.left = (x - mainPin.offsetWidth / 2) + `px`;
  };

  mainPin.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      let pinPosition = getMainPinPosition();

      let nextY = pinPosition.y - shift.y;
      let nextX = pinPosition.x - shift.x;

      if (nextX < 0) {
        nextX = 0;
      }

      if (nextX > 1200) {
        nextX = 1200;
      }

      if (nextY < 130) {
        nextY = 130;
      }

      if (nextY > 630) {
        nextY = 630;
      }

      setMainPinPosition(nextX, nextY);

      window.form.addAddress(nextX, nextY);
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
