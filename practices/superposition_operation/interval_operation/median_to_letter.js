'use strict';

const str = "abcdefghijklmnopqrstuvwxyz";
function median_to_letter(collection) {
  //在这里写入代码
  let len = collection.length;
  let median = 0;
  let mid = Math.floor(len/2);
  if(len%2===0){
    median = Math.ceil((collection[mid-1] + collection[mid])/2);
  }else{
    median = collection[mid];
  }
  
  if(median<=26){
    return str.charAt(median-1);
  }
  let shang=median/26;
  let yushu=median%26;
  return str.charAt(shang-1)+str.charAt(yushu-1);
}

module.exports = median_to_letter;
