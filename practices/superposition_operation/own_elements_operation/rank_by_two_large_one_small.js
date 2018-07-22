'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let result = [];

  let asc = collection.sort(function(a,b){
    return a-b;
  });

  let i=0;
  for(i=2; i< asc.length; i=i+3){
    result.push(asc[i-1]);
    result.push(asc[i]);
    result.push(asc[i-2]);
  }
  if(i-2<asc.length){
    result.push(asc[i-2]);
  }
  if(i-1<asc.length){
    result.push(asc[i-1]);
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
