function unique(arr) {
     var obj = {};

         for (var i = 0; i < arr.length; i++) {
                 var str = arr[i];
                 obj[str] = true;
                 }

              return Object.keys(obj);
         }

var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

console.log( unique(strings) ); // кришна, харе, 8-()
