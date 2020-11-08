'use strict';

(function () {
  window.util = {
    // Создание случайного числа по минимальному и максимальному значению
    randomNum: function (min, max) {
      let random = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(random);
    },

    getExclusiveNum: function (arr) {
      let currentNum = this.randomNum(1, 8);

      while (arr.includes(currentNum)) {
        currentNum = this.randomNum(1, 8);
      }

      arr.push(currentNum);
      return currentNum;
    }
  };
})();
