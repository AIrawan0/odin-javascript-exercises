const findTheOldest = function(people) {
    const sorted = people.sort((a,b)=>{
    if(((a.yearOfDeath?a.yearOfDeath : 2026) - a.yearOfBirth) < 
       ((b.yearOfDeath?b.yearOfDeath : 2026)- b.yearOfBirth)){
      return 1;
    }else{
      return -1;
    }
  });
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
