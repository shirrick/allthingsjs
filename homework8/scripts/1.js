var ladder = {
  step: 0,
  up: function() { // вверх
       this.step++;
      return this;
  },
  down: function() { // вниз
       this.step--;
      return this;
  },
  showStep: function() { // вывести текущую ступеньку
       alert( this.step );
      return this;
  }
};

ladder.up().up().down().up().down().showStep(); // 1
