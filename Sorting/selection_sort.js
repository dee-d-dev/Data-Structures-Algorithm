//[0,9,4,7,2,3,8,5,1,6]
//[5,3,2,1,7]

function selectionSort(array) {
  const length = array.length;
  for (i = 0; i < length; i++) {
    min = i;
    temp = array[min];
    for (j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort([0, 9, 4, 7, 2, 3, 8, 5, 1, 6]);
