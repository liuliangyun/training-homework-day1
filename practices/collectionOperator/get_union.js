'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  for(let i = 0; i < collection_a.length; i++){
    result.push(collection_a[i]);
  }
  for(let i = 0; i < collection_b.length; i++){
    if(!result.includes(collection_b[i])){
      result.push(collection_b[i]);
    }
  }
  return result;
}

module.exports = get_union;

