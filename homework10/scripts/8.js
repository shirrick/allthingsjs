//Сделал по-своему, брать решение Антона было бы моветон, не комильфо.


//Просто счётчик - считает, сколько раз что использовалось
function countClassNameInString(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]] = obj[arr[i]] + 1;
        } else {
            obj[arr[i]] = 1;
        }
    }

    return obj;
}
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

//Сортирует уникальные имена классов в массиве
function getMostUsedClass(arr) {

    var objClass = countClassNameInString(arr);

    return Object.keys(objClass).sort(function(a, b) {
        return objClass[b] - objClass[a];
    });
}
console.log(getMostUsedClass(arr));
