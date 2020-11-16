'use strict';

(function () {
  const cardTemplate = document.querySelector('#card').content;
  const filtersElement = document.querySelector(`.map__filters-container`);
  const newCardTemplate = cardTemplate.querySelector('.map__card');

  const createTemplateCards = function (obj) {

    const card = newCardTemplate.cloneNode(true);

    card.querySelector('.popup__title').textContent = obj.offer.title;
    card.querySelector('.popup__text--address').textContent = obj.offer.address;
    card.querySelector('.popup__text--price').textContent = obj.offer.price + '₽/ночь';
    card.querySelector('.popup__type').textContent = translateType(obj.offer.type);
    card.querySelector('.popup__text--capacity').textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';
    card.querySelector('.popup__text--time').textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
  
    const features = card.querySelector('.popup__features');
    features.textContent = '';
    for (let j = 0; j < obj.offer.features.length; j++) {
      if (j !== obj.offer.features.length - 1) {
        features.textContent += obj.offer.features[j];
        features.textContent += ', ';
      } else {
        features.textContent += obj.offer.features[j];
      }
    }
    if (obj.offer.features.length === 0) {
      features.style.display = 'none';
    }

    card.querySelector('.popup__description').textContent = obj.offer.description;

    const photos = card.querySelector('.popup__photos');
    for (let k = 0; k < obj.offer.photos.length; k++) {
      const picture = photos.querySelector('img');
      picture.src = obj.offer.photos[k];
    }
    if (obj.offer.photos.length === 0) {
      photos.style.display = 'none';
    }

    card.querySelector('.popup__avatar').src = obj.author.avatar;

    card.querySelector(`.popup__close`).addEventListener(`click`, function () {
      closeCard();
    });

    return card;
  };

  const translateType = function (type) {
    let translation = '';

    switch (type) {
      case 'flat':
        translation = 'Квартира';
        break;
      case 'bungalow':
        translation = 'Бунгало';
        break;
      case 'house':
        translation = 'Дом';
        break;
      case 'palace':
        translation = 'Дворец';
        break;
    }

    return translation;
  };

  const onDocumentKeyDown = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeCard();
    }
  };

  const closeCard = function () {
    const card = window.map.querySelector(`.map__card`);
    if (card) {
      card.remove();
      // window.pin.removeActive();
      document.removeEventListener(`keydown`, onDocumentKeyDown);
    }
  };

  const renderCard = function (obj) {
    closeCard();
    const card = createTemplateCards(obj);
    window.map.insertBefore(card, filtersElement);
    document.addEventListener(`keydown`, onDocumentKeyDown);
  };

  window.card = {
    renderCard: renderCard,
    closeCard: closeCard
  };
})();
