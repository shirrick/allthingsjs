//Рассчёт стоимости подписки по среднему арифметическому

while (true) {
         var subPrice = prompt("Введите цену подписки", 0);
         if (subPrice === '' || subPrice === null || isNaN(subPrice)) break;
         pricesArray.push(+subPrice);
      }

      //
      // var sum = 0;
      // for (var i = 0; i < numbers.length; i++) {
      //    sum += numbers[i];
      //   }
      //
      // alert( sum );



//
// var firstSubPrice = prompt('Введите цену первой подписки');
// var secondSubPrice = prompt('Введите цену второй подписки');
// var avgSubPrice = (firstSubPrice + secondSubPrice) / 2;
// var oneimage = ((fivehundred / 500) + (onehundredfifty / 150)) / 2;
// console.log ((oneimage) + ' ' + 'dollars per image');
// var subprice = (oneimage * 200);
//
// //калькулятор стоимости подписки
