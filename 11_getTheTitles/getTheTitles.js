const getTheTitles = function(array) {
    let arrayOfKeys = [];
    for (let obj of array) {
        arrayOfKeys.push(obj["title"]);
    }
    return arrayOfKeys;
};

// Do not edit below this line
module.exports = getTheTitles;
