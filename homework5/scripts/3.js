var numbers = [];

    while (true) {

             var num = prompt("Введите число", 0);

             if (num === '' || num === null || isNaN(num)) break;

             numbers.push(+num);
          }

         var sum = 0;
         for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
           }

         alert( sum );
