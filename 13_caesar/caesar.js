/* 
    capital letters A - Z: 65 to 90
    lowercase letters a - z: 97 to 122


*/

const caesar = function(string, shift) {
    let encryptedString = "";
    let newShift;
    if (shift < -26) {
        newShift = shift % 26;
    } else if (shift > 26) {
        newShift = shift % 26;
    } else {
        newShift = shift;
    }
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            if (charCode + newShift < 65) {
                charCode = 91 - (65 - (charCode + newShift)); //B = 66, newShift value = -5. 91 - (65 - 66 + (-5)) = 87, should be W
            } else if (charCode + newShift > 90) {
                charCode = 64 + (charCode + newShift - 90);
            } else {
                charCode = charCode + newShift;
            }
            encryptedString += String.fromCharCode(charCode);
        } else if (charCode >= 97 && charCode <= 122) {
            if (charCode + newShift < 97) {
                charCode = 123 - (97 - (charCode + newShift));
            } else if (charCode + newShift > 122) {
                charCode = 96 + (charCode + newShift - 122);
            } else {
                charCode = charCode + newShift;
            }
            encryptedString += String.fromCharCode(charCode);
        } else {
            encryptedString += string[i];
        }
    }
    return encryptedString;
};

// Do not edit below this line
module.exports = caesar;
