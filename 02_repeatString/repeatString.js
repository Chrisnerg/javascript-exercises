const repeatString = function(word,num) 
{
    let repeatString = word;
    let result = "";

    if( num < 0)
    {
        return "ERROR";
    }
    else
    {
        for(let i = 0; i < num; i++)
            {
                result += repeatString;
            }
            return result;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
