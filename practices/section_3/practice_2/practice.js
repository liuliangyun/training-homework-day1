function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.map(function(x){
    if(object_b.value.includes(x.key)){
      x.count-=Math.floor(x.count/3);
    }
    return x;
  });
}

module.exports = create_updated_collection;
