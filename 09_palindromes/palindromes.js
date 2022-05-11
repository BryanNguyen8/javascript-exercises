const palindromes = function (string) {
    let cleanString = string.replace(/\W|_/g, '').toLowerCase();
    for (let i = 0; i < cleanString.length / 2; i++) {
        if (!(cleanString[i] === cleanString[cleanString.length - i - 1])) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
