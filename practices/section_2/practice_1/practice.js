function count_same_elements(collection) {
  //在这里写入代码
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    let value = collection[i];
    let contains = false;
    for(let j=0; j<result.length; j++){
      if(result[j].key === value){
        result[j].count++;
        contains=true;
      }
    }
    if(!contains){
      let obj = {key:value, count:1};
      result.push(obj);
    }
  }
  return result;
}

module.exports = count_same_elements;
