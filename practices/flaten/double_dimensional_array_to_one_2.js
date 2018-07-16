'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let result = [].concat.apply([], collection);
  return result.filter(function (x, index, arr) {
    return arr.indexOf(x) == index;
  });
}

module.exports = double_to_one;
