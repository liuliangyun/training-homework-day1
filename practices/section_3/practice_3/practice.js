function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = [];

  for (let i = 0; i < collection_a.length; i++) {
    let value = collection_a[i];
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

  return result.map(function(x){
    if(object_b.value.includes(x.key)){
      x.count-=Math.floor(x.count/3);
    }
    return x;
  });
}

module.exports = create_updated_collection;
