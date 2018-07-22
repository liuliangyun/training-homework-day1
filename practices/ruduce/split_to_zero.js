'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  let i = number.toPrecision(1);
  interval = interval.toPrecision(1);
  while(i > 0){
    result.push(parseFloat(i));
    i=(i-interval).toPrecision(1);
  }
  if(!result.includes(0)){
    result.push(parseFloat(i));
  }
  return result;
}

module.exports = spilt_to_zero;
