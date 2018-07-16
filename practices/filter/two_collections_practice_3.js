'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(function (x) {
    let flag = false;
    for (let i = 0; i < collection_b.length; i++) {
      if (x % collection_b[i] == 0) {
        flag = true;
        break;
      }
    }
    return flag;
  });
}

module.exports = choose_divisible_integer;
