function count_same_elements(collection) {
  //在这里写入代码
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    let value = collection[i];
    let add = 1;

    if (value.includes('-')) {
      let arr = collection[i].split("-");
      value = arr[0];
      add = parseInt(arr[1]);
    }
    if (value.includes(':')) {
      let arr = collection[i].split(":");
      value = arr[0];
      add = parseInt(arr[1]);
    }
    if (value.includes('[') && value.includes(']')) {
      let start = value.indexOf('[');
      let end = value.indexOf(']');
      add = parseInt(value.substring(start + 1, end));
      value = value.substring(0, start);
    }

    let contains = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j].name === value) {
        result[j].summary += add;
        contains = true;
      }
    }
    if (!contains) {
      let obj = { name: value, summary: add };
      result.push(obj);
    }
  }
  return result;
}

module.exports = count_same_elements;
