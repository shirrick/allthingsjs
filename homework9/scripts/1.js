function sumArgs() {
    return[].reduce.call(arguments, function(a, b) {return a + b;});}
alert(sumArgs(8, 4, 12)); //24
