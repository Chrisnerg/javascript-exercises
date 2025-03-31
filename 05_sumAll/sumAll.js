const sumAll = function(num1,num2) 
{
    let total = 0;
    let lower = 0;
    let upper = 0;

    if(num1 < num2)
    {
        lower = num1;
        upper = num2;
    }
    else
    {
        lower = num2;
        upper = num1;
    }

    if(num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }

    if((typeof num1) != "number" || (typeof num2) != "number")
    {
        return "ERROR";
    }

    if(!Number.isInteger(num1) || !Number.isInteger(num2))
    {
        return "ERROR";
    }
    
    for(let i = lower; i <= upper; i++)
    {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
