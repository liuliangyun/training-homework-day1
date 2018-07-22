function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(x => object_b.value.includes(x.key)).map(x => x.key);
}

module.exports = collect_same_elements;
