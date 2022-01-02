//merging sorted arrays
//arr1 = [0,2,4,5], arr2 = [1,3,6,7,8,9]
const arr1 = [0, 2, 4, 5];
const arr2 = [1, 3, 6, 7, 8, 9];
function mergeSortedArrays(arr1, arr2) {
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;
  const mergedArray = [];

  //check for input
  if (arr1.length === 0) {
    console.log(arr2);
  }

  if (arr2.length === 0) {
    console.log(arr1);
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  console.log(mergedArray);
}

mergeSortedArrays(arr1, arr2);
