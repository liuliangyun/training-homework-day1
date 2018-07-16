'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  let min = number_a > number_b ? number_b : number_a;
  let max = number_a > number_b ? number_a : number_b;
  for(let i = min;i <= max;i++){
    result.push(i);
  }

  if(number_a > number_b){
    result.reverse();
  }
  return result;
}

module.exports = get_integer_interval;

