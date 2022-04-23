//this returns the first recurring character i.e it sends back the first character to be repeated.
//[2,4,6,2,1,8] the function should return 2 because 2 is the first number to be repeated
const arrayChar = [2, 4, 2, 6, 1, 8];

function checkCharacter(array) {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i] + " is the first character to be repeated";
      } 
    }
  }
  return "NO character was repeated";
} //the big 'O' notation for this is 0(n^2)

//here I am using hash tables for better implementation
//Using Map
function checkCharacter2(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
    console.log(map)
  }
}
checkCharacter2([2, 4, 2, 6, 1, 8]);
// checkCharacter2(arrayChar);
