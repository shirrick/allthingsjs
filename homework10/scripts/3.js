function getSortedLetters(str) {
    var newStr = str.split('').sort().join('');
    return newStr;
}

console.log(getSortedLetters('webmaster')); //abeemrstw
