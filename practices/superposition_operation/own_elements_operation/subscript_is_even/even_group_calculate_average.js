'use strict';
var even_group_calculate_average = function(collection){
    let result=[];
    let array = collection.filter((x,index) => (index+1)%2===0 && x%2===0);

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for(let i=0; i<array.length; i++){
        if(array[i] < 10){
            arr1.push(array[i]);
        }
        else if(array[i] < 100){
            arr2.push(array[i]);
        }
        else{
            arr3.push(array[i]);
        }
    }

    if(arr1.length === 0 && arr2.length === 0 && arr3.length === 0){
        result.push(0);
        return result;
    }

    if(arr1.length>0){
        let average1 = arr1.reduce((pre,cur) => pre+cur)/arr1.length;
        result.push(average1);
    }
    if(arr2.length>0){
        let average2 = arr2.reduce((pre,cur) => pre+cur)/arr2.length;
        result.push(average2);
    }
    if(arr3.length>0){
        let average3 = arr3.reduce((pre,cur) => pre+cur)/arr3.length;
        result.push(average3);
    }
    return result;
};
module.exports = even_group_calculate_average;
