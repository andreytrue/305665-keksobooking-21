'use strict';

(function () {
// Insert random pins
  const pinTemplate = document.querySelector('#pin').content;
  const newPinTemplate = pinTemplate.querySelector('.map__pin');

  window.pin = {
    insertPins: function () {
      let fragment = new DocumentFragment();

      for (let i = 0; i < window.USERS_AMOUNT; i++) {
        let pin = newPinTemplate.cloneNode(true);

        pin.style = 'left:' + window.users[i].location.x + 'px; top: ' + window.users[i].location.y + 'px;';
        let picture = pin.querySelector('img');
        picture.src = window.users[i].author.avatar;
        picture.alt = window.users[i].offer.title;

        fragment.append(pin);
      }

      return fragment;
    }
  };
})();
