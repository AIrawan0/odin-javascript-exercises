const convertToCelsius = function(temp) {
  const conv = (temp-32)*(5/9)
  const res = conv%2==0? conv:parseFloat(conv.toFixed(1))
  return res;
};
 
const convertToFahrenheit = function(temp) {
  const conv = (temp*(9/5)+32)
  const res = conv%2==0? conv:parseFloat(conv.toFixed(1))
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
