function leapYears(year){
  let status = false;
  if(year%400==0)status = true
  if(year%4==0 && year%100!=0)status=true 
  
  return status;
};
// Do not edit below this line
module.exports = leapYears;
