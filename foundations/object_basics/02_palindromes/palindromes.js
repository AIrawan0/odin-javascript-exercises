function isPali(word){
  let ispali = false;
  let ori ='';
  let back =''
  for(let i=0;i<word.length;i++){
    ori+=word[i];
    back+=word[word.length-i-1];
  }
  if(ori===back)ispali = true;
  return ispali;
}

const palindromes = function (word) {
  const cleaned = word.replace(/[-_!@#. ,]/g, "").toLowerCase();
  console.log(cleaned);
  return isPali(cleaned)
};

// Do not edit below this line
module.exports = palindromes;
