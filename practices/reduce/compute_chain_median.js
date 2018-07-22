'use strict';

function compute_chain_median(collection) {
  //解析链表
  let array=collection.split("->");
  //从大到小排序
  let asc_array=array.sort(function(a,b){
    return b-a;
  })
  //求中位数
  let length=asc_array.length;
  let index=Math.floor(asc_array.length/2);
  if(length%2===0){
    let mid = (parseInt(asc_array[index-1])+parseInt(asc_array[index]))/2;
    return mid;
  }
  return parseInt(asc_array[index]);
}

module.exports = compute_chain_median;
