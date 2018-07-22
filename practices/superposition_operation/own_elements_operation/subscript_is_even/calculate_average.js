'use strict';
var calculate_average = function(collection){
    let array = collection.filter((x,index) => (index+1)%2===0);
    return array.reduce((pre,cur) => pre+cur)/array.length;
};
module.exports = calculate_average;
