'use strict';

(function () {
  const cardTemplate = document.querySelector('#card').content;
  const newCardTemplate = cardTemplate.querySelector('.map__card');
  const filtersContainer = window.map.querySelector('.map__filters-container');

  const cardElement = function () {
    const fragment = new DocumentFragment();

    for (let i = 0; i < 1; i++) {
      const card = newCardTemplate.cloneNode(true);

      const title = card.querySelector('.popup__title');
      title.textContent = window.users[i].offer.title;

      const address = card.querySelector('.popup__text--address');
      address.textContent = window.users[i].offer.address;

      const price = card.querySelector('.popup__text--price');
      price.textContent = window.users[i].offer.price + '₽/ночь';

      const type = card.querySelector('.popup__type');
      if (window.users[i].offer.type === 'flat') {
        type.textContent = 'Квартира';
      } else if (window.users[i].offer.type === 'bungalow') {
        type.textContent = 'Бунгало';
      } else if (window.users[i].offer.type === 'house') {
        type.textContent = 'Дом';
      } else if (window.users[i].offer.type === 'palace') {
        type.textContent = 'Дворец';
      }

      const capacity = card.querySelector('.popup__text--capacity');
      capacity.textContent = window.users[i].offer.rooms + ' комнаты для ' + window.users[i].offer.guests + ' гостей';

      const time = card.querySelector('.popup__text--time');
      time.textContent = 'Заезд после ' + window.users[i].offer.checkin + ', выезд до ' + window.users[i].offer.checkout;

      const features = card.querySelector('.popup__features');
      features.textContent = '';
      for (let j = 0; j < window.users[i].offer.features.length; j++) {
        if (j !== window.users[i].offer.features.length - 1) {
          features.textContent += window.users[i].offer.features[j];
          features.textContent += ', ';
        } else {
          features.textContent += window.users[i].offer.features[j];
        }
      }
      if (window.users[i].offer.features.length === 0) {
        features.style.display = 'none';
      }

      const description = card.querySelector('.popup__description');
      description.textContent = window.users[i].offer.description;

      const photos = card.querySelector('.popup__photos');
      for (let k = 0; k < window.users[i].offer.photos.length; k++) {
        const picture = photos.querySelector('img');
        picture.src = window.users[i].offer.photos[k];
      }
      if (window.users[i].offer.photos.length === 0) {
        photos.style.display = 'none';
      }

      const avatar = card.querySelector('.popup__avatar');
      avatar.src = window.users[i].author.avatar;

      fragment.append(card);
    }

    return fragment;
  };

  filtersContainer.prepend(cardElement());
})();
