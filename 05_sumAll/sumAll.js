const sumAll = function(a, b) {
    if ((typeof a !== "number") || (typeof b !== "number")) {
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    } else {
        let numOne = Math.min(a, b);
        let numTwo = Math.max(a, b);
        let sum = 0;
        for (let i = numOne; i <= numTwo; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
