'use strict';

var str = 'abcdefghijklmnopqrstuvwxyz';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  let min = number_a > number_b ? number_b : number_a;
  let max = number_a > number_b ? number_a : number_b;
  for (let i = min; i <= max; i++) {
    if (i > 26) {
      result.push(convert(i));
    } else {
      result.push(str.get(i - 1));
    }
  }

  if (number_a > number_b) {
    result.reverse();
  }
  return result;
}

function convert(i) {
  let s = '';
  if (i >= 26) {
    let yushu = i % 26;
    let shang = i / 26;
    i = shang;
  } else {
    s += str.indexOf(i - 1);
  }
  return s;
}

module.exports = get_letter_interval;
