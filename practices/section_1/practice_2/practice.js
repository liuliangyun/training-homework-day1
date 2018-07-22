function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(function(x){
    for(let i=0; i<collection_b.length; i++){
      if(collection_b[i].length>1 && collection_b[i].includes(x)){
        return true;
      }
      return false;
    }
  })
}

module.exports = collect_same_elements;
