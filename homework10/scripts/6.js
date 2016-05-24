function getTypeOfArgument(arg) {
    return typeof arg;
}

console.log(getTypeOfArgument(12));
console.log(getTypeOfArgument('str'));
console.log(getTypeOfArgument(true));
console.log(getTypeOfArgument(function() {}));
console.log(getTypeOfArgument({
    a: 4
}));
console.log(getTypeOfArgument(undefined));
