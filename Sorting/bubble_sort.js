//[8,6,9,2,7,4,5,1,3]
const numbers = [8, 6, 9, 2, 7, 4, 5, 1, 3];
function bubbleSort(array) {
  let arrLength = array.length;
  for (i = 0; i < arrLength; i++) {
    for (j = 0; j < arrLength; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array
}

bubbleSort(numbers);
console.log(numbers);
