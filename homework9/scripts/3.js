function func(a, b) {
    alert(a + b);
}

function makeLogging(f, log) {

    function wrapper() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }

    return wrapper; // - задача с урока
}

var log = [];
work = makeLogging(work, log);

for (var i = 0; i < log.length; i++) {
    var args = log[i];
    alert('Лог:' + args.join());
}
