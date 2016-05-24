function extractNumber(obj) {
    var ages = [];
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            ages.push(obj[key]);
        }
    }
    return ages;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function extractString(obj) {
    var names = [];

    for (var key in obj) {
        if (isString(obj[key])) {
            names.push(obj[key]);
        }
    }
    return names;
}

function isString(str) {
    return (typeof str == "string");
}

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

console.log(extractNumber(obj));
console.log(extractString(obj));
