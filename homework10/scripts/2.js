var myArr1 = [1, 30, 40, 2, 7];
var myArr2 = [1, 15, -20, 2, -7];

function getMaxNumber(arr) {
    var sortedArray = arr.sort(function(a, b) {
        return b - a;
    });

    return (sortedArray[0]);
}

console.log(getMaxNumber(myArr1));
console.log(getMaxNumber(myArr2));
