function merge(arr1, arr2) {
  let length1 = arr1.length;
  let length2 = arr2.length;

  if (length1 === 0) {
    return arr2;
  }
  if (length2 === 0) {
    return arr1;
  }

  let rtn = [];
  let i = 0;
  let j = 0;
  while (i < length1 && j < length2) {
    if (arr1[i] < arr2[j]) {
      rtn.push(arr1[i]);
      i++;
    } else {
      rtn.push(arr2[j]);
      j++;
    }
  }

  while (i < length1) {
    rtn.push(arr1[i]);
    i++;
  }

  while (j < length2) {
    rtn.push(arr2[j]);
    j++;
  }

  return rtn;
}


console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
console.log(merge([1, 2, 3, 4], [4, 5, 6]), "=?", [1, 2, 3, 4, 4, 5, 6]);