'use strict';
const str = "abcdefghijklmnopqrstuvwxyz";
var number_map_to_word_over_26 = function(collection){
  return collection.map(function(x){
    if(x<=26){
      return str.charAt(x-1);
    }
    let shang=x/26;
    let yushu=x%26;
    return str.charAt(shang-1)+str.charAt(yushu-1);
  });
};

module.exports = number_map_to_word_over_26;
