function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return  !!(~lowerStr.indexOf('spam') || ~lowerStr.indexOf('sex'));
}

alert(checkSpam('get new Sex videos')); // true
alert(checkSpam('[SPAM] How to earn fast money?')); // true
alert(checkSpam('New PSD template')); // false
