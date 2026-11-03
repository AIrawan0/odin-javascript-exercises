const repeatString = function(string,repeat) {
    let res = '';
    if(repeat<0){return 'ERROR';}
    for(let i=0;i<repeat;i++){
        res += string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
