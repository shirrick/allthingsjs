// Восьмое задание, решённое Антоном.

function unique(array) {
  var result = [];
  var resultresult = [];
  var maxNum = 0;
  var maxEl;

  for (var i = 0; i < array.length; i++) {
    (result[array[i]]) ? result[array[i]]++ : (result[array[i]] = 1);
  }

  for (var i in result) {
    var maxNum = 0;

    for (var k in result) {
        if (result[i] > maxNum) {
          maxNum = result[i];
          maxEl = i;
        }
    }

    resultresult.push(maxEl);
    delete result[maxEl];
    console.log(result);
  }

  return resultresult;
}
