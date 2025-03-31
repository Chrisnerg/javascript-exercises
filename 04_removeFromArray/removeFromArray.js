const removeFromArray = function (array, num1, num2, num3, num4) {
    let index = 0;
    let numArr = [num1, num2, num3, num4];


    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(num1) || Number.isInteger(num2) || Number.isInteger(num3) || Number.isInteger(num4)) {
            if (array[i] == numArr[0] || array[i] == numArr[1] || array[i] == numArr[2] || array[i] == numArr[3]) {
                for (let c = i; c < array.length; c++) {
                    if (array[c + 1] != undefined) {
                        array[c] = array[c + 1];

                    }
                }
                array.pop();
                i--;
            }
        }

    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
