'use strict';
var even_asc_odd_desc = function(collection){
    let result = [];
    let even = collection.filter(x => x%2===0).sort(function(a,b){
        return a-b;
    });
    let odd = collection.filter(x => x%2===1).sort(function(a,b){
        return b-a;
    });
    even.forEach(element => {
        result.push(element);
    });
    odd.forEach(element => {
        result.push(element);
    });
    return result;
};
module.exports = even_asc_odd_desc;
