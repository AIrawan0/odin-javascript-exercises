const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  const total  = arr.reduce((tot,curr)=>tot+curr,0);
  return total;
};

const multiply = function(arr) {
  return arr.reduce((tot,curr)=>tot*curr,1);
};

const power = function(num,power) {
  return Math.pow(num,power);
};

const factorial = function(num) {
  let res =1;
  if(num==0)return 1;
  for(let i=num;i>=1;i--){
    res= res * i;
  } 
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
