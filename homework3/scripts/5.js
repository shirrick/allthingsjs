var size = 8;
var space = '';
var hash = '#';
for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {space += hash;}
    else {space += ' ';}}
  space += '\n';
}
console.log(space);
