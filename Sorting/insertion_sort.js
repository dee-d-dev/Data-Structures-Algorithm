const numbers = [7, 2, 9, 6, 5, 1, 3, 8, 4];

function insertionSort(array) {
  const length = array.length;
  for (i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] - array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

insertionSort([7, 2, 9, 6, 5, 1, 3, 8, 4]);