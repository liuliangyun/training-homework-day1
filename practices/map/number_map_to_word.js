'use strict';
const str = "abcdefghijklmnopqrstuvwxyz";
var number_map_to_word = function(collection){
  return collection.map(x => str.charAt(x-1));
};

module.exports = number_map_to_word;
