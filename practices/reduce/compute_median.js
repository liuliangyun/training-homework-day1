'use strict';

function compute_median(collection) {
  //在这里写入代码
  //从大到小排序
  let asc_collection=collection.sort(function(a,b){
    return b-a;
  })
  //求中位数
  let length=asc_collection.length;
  let index=Math.floor(asc_collection.length/2);
  if(length%2===0){
    let mid = (parseInt(asc_collection[index-1])+parseInt(asc_collection[index]))/2;
    return mid;
  }
  return parseInt(asc_collection[index]);
}

module.exports = compute_median;


