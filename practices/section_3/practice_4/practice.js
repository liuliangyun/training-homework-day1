function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = [];

  for (let i = 0; i < collection_a.length; i++) {
    let value = collection_a[i];
    let add = 1;
    if (collection_a[i].includes('-')) {
      let arr = collection_a[i].split('-');
      value = arr[0];
      add = parseInt(arr[1]);
    }
    let contains = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j].key === value) {
        result[j].count += add;
        contains = true;
      }
    }
    if (!contains) {
      let obj = { key: value, count: add };
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
