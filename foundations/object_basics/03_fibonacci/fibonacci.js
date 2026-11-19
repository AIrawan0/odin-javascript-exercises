const fibonacci = function(num) {
  let seq = [];
  if(typeof num !== "number"||num<1||isNaN(num))return "OOPS";
  for(let i=0;i<=num;i++){
    let temp = 0;
    if(i<=1){temp=i}
    else{
      temp =seq[i-1] + seq[i-2];
    }
    seq.push(temp)
  }
  return seq[seq.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
