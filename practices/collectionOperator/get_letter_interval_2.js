'use strict';

const str = 'abcdefghijklmnopqrstuvwxyz';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  let min = number_a > number_b ? number_b : number_a;
  let max = number_a > number_b ? number_a : number_b;
  for (let i = min; i <= max; i++) {
    result.push(convert(i, ''));
  }

  if (number_a > number_b) {
    result.reverse();
  }
  return result;
}

function convert(i, s) {
  let yushu = 0;
  let shang = 0;
  if (i >= 26) {
    yushu = i % 26;
    shang = i / 26;
    i = shang;
    if (yushu != 0) {
      return s += convert(i, '') + str.substring(yushu - 1, yushu);

    } else {
      return s += convert(i - 1, '') + 'z';
    }
  } else {
    return s += str.substring(i - 1, i);
  }
}

module.exports = get_letter_interval_2;

