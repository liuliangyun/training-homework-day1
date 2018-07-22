'use strict';

const str="abcdefghijklmnopqrstuvwxyz";
function even_to_letter(collection) {
  //在这里写入代码
  return collection.filter(x => x%2===0).map(function(x){
    return str.charAt(x-1);
  });
}

module.exports = even_to_letter;
