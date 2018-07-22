'use strict';
var is_exist_element = function(collection,element){
    let array = collection.filter((value, index) => index%2===0);
    return array.includes(element);
};
module.exports = is_exist_element;
