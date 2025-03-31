const leapYears = function(year) 
{
    let StringYear = year.toString();
    let myArr = StringYear.split("");

    if(myArr[3] == "4")
    {
        return true;
    }
    if((year % 100) != 0 && (year % 4) == 0)
    {
        return true;
    }
    if((year % 100) == 0 && (year % 400) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
