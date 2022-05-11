const removeFromArray = function(array, ...values) {
    let newArray = [];
    outer:
    for (let i = 0; i < array.length; i++) {
        for (let value of values) {
            if (value === array[i]) {
                continue outer;
            }
        }
        newArray.push(array[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
