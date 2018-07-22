'use strict';

function amount_even(collection) {
  //在这里写入代码
  return collection.filter(x => x%2===0 && x<=10 && x>=1).reduce((pre,cur) => pre+cur);
}

module.exports = amount_even;
