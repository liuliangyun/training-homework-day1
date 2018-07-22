'use strict';
var single_element = function (collection) {
    let result = [];
    let array = collection.filter((value, index) => (index + 1) % 2 === 0);
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            result.push(array[i]);
        }
    }
    if (result.length > 0) {
        return result.sort(function (a, b) {
            return a - b;
        });
    }
    return result;
};
module.exports = single_element;
