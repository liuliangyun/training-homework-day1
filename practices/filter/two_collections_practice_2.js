'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(x => !collection_b.includes(x));
}

module.exports = choose_no_common_elements;
