function count_same_elements(collection) {
  //在这里写入代码
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    let value = collection[i];
    let add=1;
    let arr=collection[i].split("-");
    if(arr.length>1){
      value=arr[0];
      add=parseInt(arr[1]);
    }
    let contains = false;
    for(let j=0; j<result.length; j++){
      if(result[j].key === value){
        result[j].count+=add;
        contains=true;
      }
    }
    if(!contains){
      let obj = {key:value, count:add};
      result.push(obj);
    }
  }
  return result;
}

module.exports = count_same_elements;
