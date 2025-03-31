const convertToCelsius = function(F) 
{
  let num = 0;
  num = ((F - 32) * 5) / 9;
  if(F == 32)
  {
    return 0;
  }
  return parseFloat(num.toFixed(1));
};

const convertToFahrenheit = function(C) 
{
  let num = 0;
  num = ((C * 9) / 5) + 32;
  if(C == 0)
  {
    return 32;
  }
  return parseFloat(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
