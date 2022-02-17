function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  console.log(result)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
number = [4, 6, 1, 7, 3, 8, 2, 9, 5];
mergeSort(number);
