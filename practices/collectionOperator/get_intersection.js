'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  for(let i = 0; i < collection_b.length; i++){
    if(collection_a.includes(collection_b[i])){
      result.push(collection_b[i]);
    }
  }
  return result;
}

module.exports = get_intersection;
