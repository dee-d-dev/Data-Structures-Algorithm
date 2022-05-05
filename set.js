let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 2, 3, 5];

// mySet.add(1)
// mySet.add(arr1)
// mySet.add(arr2.concat(arr1));



// function checkUnique(arr) {
//   let mySet = new Set(arr);
//   console.log(mySet.size < arr.length);
//   console.log(mySet)
// }

function intersect(setA, setB){
    setA = new Set(arr1);
    setB = new Set(arr2);
    let setC = new Set()
    for(elem of setA){
        if(setB.has(elem)){
            setC.add(elem)
        }
    }

    console.log(setC)
}


intersect(arr1, arr2)