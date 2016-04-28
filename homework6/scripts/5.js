function isPal(string) {
       string = string.toLowerCase();
       string = string.replace(/\s/g, ''); // remove spaces
       string = string.replace(/[\.,'-\/#!$%\^&\*;:{}=\-_`~()]/g,"") // remove punctuation

       var reverse = string.split('').reverse().join('');

    if (string === reverse) {
         return true;
       }
         else {
            return false;
          }
   };

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
