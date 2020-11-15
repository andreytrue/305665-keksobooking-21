'use strict';

(function () {
// Insert random pins
  const pinTemplate = document.querySelector('#pin').content;
  const newPinTemplate = pinTemplate.querySelector('.map__pin');
  const mapPinsList = document.querySelector(`.map__pins`);
  const fragment = document.createDocumentFragment();
  const USERS_AMOUNT = 8;

  const createTemplatePin = function (obj) {
    const pin = newPinTemplate.cloneNode(true);

    pin.style = 'left:' + obj.location.x + 'px; top: ' + obj.location.y + 'px;';
    let picture = pin.querySelector('img');
    picture.src = obj.author.avatar;
    picture.alt = obj.offer.title;
    // pin.id = i;

    pin.addEventListener(`click`, function () {
      window.card.renderCard(obj);
    });

    return pin;
  };

  const renderPins = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      const pin = createTemplatePin(arr[i]);
      fragment.appendChild(pin);
    }
    mapPinsList.appendChild(fragment);
  };

  window.pin = {
    renderPins: renderPins
  };

  window.USERS_AMOUNT = USERS_AMOUNT;
})();
