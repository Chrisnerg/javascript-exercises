const reverseString = function(word) 
{
    const myArr = word.split("");
    let reversedString = "";

    for(let i = myArr.length - 1; i >= 0; i--)
    {
        reversedString += myArr[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
