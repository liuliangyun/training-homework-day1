'use strict';

function grouping_count(collection) {
  //在这里写入代码
  let result = {};

  for (let i = 0; i < collection.length; i++) {
    let value = collection[i];
    if (result[value]) {
      result[value]++;
    } else {
      result[value] = 1;
    }
  }
  return result;
}

module.exports = grouping_count;
