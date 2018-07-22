'use strict';
function one_add_next_multiply_three(collection){
  return collection.map((x,index,arr) => {
    if(index<collection.length-1){
      return (x+arr[index+1])*3;
    }
    return x;
  }).slice(0,collection.length-1);

}
module.exports = one_add_next_multiply_three;
