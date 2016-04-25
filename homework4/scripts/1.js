function fib(n) {

var a, b, c;
    a = 1; b = 1;

  for (var i = 3; i <= n; i++) {

  c = a + b;
      a = b;
      b = c;
  }
  return c;
}
console.log(fib(3)); //2
console.log(fib(7)); //13
console.log(fib(77)); //5527939700884757
