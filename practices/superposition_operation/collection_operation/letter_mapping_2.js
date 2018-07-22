'use strict';

const str="abcdefghijklmnopqrstuvwxyz";
function average_to_letter(collection) {
  //在这里写入代码
  let average=Math.ceil(collection.reduce((pre,cur) => pre+cur) / collection.length);
  return str.charAt(average-1);

}

module.exports = average_to_letter;

