// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

let rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;

      /*
    
        example=[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]

        final=[
          [7, 4, 1],
          [8, 5, 2],
          [9, 6, 3],
        ]

        transform = [
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
        ]
       at i=0 j=1, matrix[i][j] = matrix[0][1]
       temp = matrix[0][1]; //2
       matrix[i][j] = matrix[j][i]; //4
       matrix[j][i] = temp; //2

       at i=0 j=2, matrix[i][j] = matrix[0][2]
       temp = matrix[0][2]; //3
       matrix[i][j] = matrix[j][i]; //7
       matrix[j][i] = temp; //3

       at i=1 j=2, matrix[i][j] = matrix[1][2]
       temp = matrix[1][2]; //6
       matrix[i][j] = matrix[j][i]; //8
       matrix[j][i] = temp; //6

       //reverse each row
       i<matrix.length
      */
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
    // console.log(matrix[i].length);
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
