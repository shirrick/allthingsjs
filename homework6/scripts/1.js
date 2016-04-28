function removeClass(obj, cls) {
    var arr = obj.className.split(' ');

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}

var obj = {
    className: 'open menu menu'
}

removeClass(obj, 'blabla');
removeClass(obj, 'menu');
console.log(obj.className);
