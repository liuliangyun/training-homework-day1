'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce(function(pre,cur,index,array){
    return pre>cur ? pre:cur;
  });
}

module.exports = collect_max_number;
