'use strict';

(function () {
  const templateSuccess = document.querySelector(`#success`).content.querySelector(`.success`);
  const templateError = document.querySelector(`#error`).content.querySelector(`.error`);
  const main = document.querySelector(`main`);

  const showSuccess = function () {
    const success = templateSuccess.cloneNode(true);
    success.addEventListener(`click`, function () {
      closeSuccess();
    });

    document.addEventListener(`keydown`, onDocumentKeydown);

    main.appendChild(success);
    success.focus();
  };

  const showError = function (errorMessage) {
    const error = templateError.cloneNode(true);
    error.querySelector(`.error__message`).textContent = errorMessage;
    error.addEventListener(`click`, function () {
      closeError();
    });

    document.addEventListener(`keydown`, onDocumentKeydown);

    main.appendChild(error);
  };

  const closeSuccess = function () {
    const success = main.querySelector(`.success`);
    if (success) {
      success.remove();
      document.removeEventListener(`keydown`, onDocumentKeydown);
    }
  };

  const closeError = function () {
    const error = main.querySelector(`.error`);
    if (error) {
      error.remove();
      document.removeEventListener(`keydown`, onDocumentKeydown);
    }
  };

  const onDocumentKeydown = function (evt) {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      closeSuccess();
      closeError();
    }
  };

  window.message = {
    showError: showError,
    showSuccess: showSuccess
  };
})();
