'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  return collection.filter(x => x%2===1).map(x => x*3+5).reduce((pre,cur) => pre+cur);
}

module.exports = hybrid_operation_to_uneven;

