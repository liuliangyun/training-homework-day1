'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for (let i=0;i<collection.length;i++) {
    if (collection[i]%2==0) {
      return collection[i];
    }
  }
  return -1;
}

module.exports = find_first_even;

