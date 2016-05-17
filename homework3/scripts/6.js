function pow(x, n) {
  var b=x;
  for (var i = 1; i < n; i++) {b *= x;}
  return b;
}
