<<<<<<< HEAD
function getCapitaliseStr(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

console.log(getCapitaliseStr('the quick brown fox')); //The Quick Brown Fox
=======
function getCapitaliseStr(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

console.log(getCapitaliseStr('the quick brown fox')); //The Quick Brown Fox
>>>>>>> master
