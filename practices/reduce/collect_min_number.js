'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce(function(pre,cur,index,array){
    return pre>cur ? cur:pre;
  });
}

module.exports = collect_min_number;

