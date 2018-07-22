'use strict';

function average_uneven(collection) {
  //在这里写入代码
  let uneven = collection.filter(x => x%2===1 && x>=1 && x<=10);
  return uneven.reduce((pre,cur) => pre+cur)/uneven.length;
}

module.exports = average_uneven;
