var arr = [2, 5, 1, -9, 16, 'str'];

function shuffle(arr) {
    return arr.sort(function() {
        return Math.random() - 0.5;
    });
}

console.log(shuffle(arr));
console.log(shuffle(arr));
