function getLongestStr(str) {
    var arr = str.split(' ').sort(function(a, b) {
        return b.length - a.length;
    });
    return arr[0];
}

console.log(getLongestStr('Web Development Tutorial'));
