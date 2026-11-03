function sumAll(a,b){
  let sum =0;
  if(!(typeof a == 'number' && a%1==0  && a>=0)){return "ERROR"}
  if(!(typeof b == 'number' && b%1==0 && b>=0)){return "ERROR"}
  const start = a>b?b:a;
  const end = a>b?a:b;
  for(let i=start;i<=end;i++){
    sum+=i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
