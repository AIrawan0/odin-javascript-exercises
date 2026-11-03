const removeFromArray = function(arr,...remove) {
    const res = [];
    for(num of arr){
      if(!(remove.includes(num)))res.push(num)
    }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
