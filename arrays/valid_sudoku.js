let isValidSudoku = function (board) {
  let rows = {};
  let columns = {};
  let boxes = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num != ".") {
        let box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (rows[i] && rows[i].includes(num)) {
          return false;
        }
        if (columns[j] && columns[j].includes(num)) {
          return false;
        }
        if (boxes[box_index] && boxes[box_index].includes(num)) {
          return false;
        }

        storeNums(rows, num, i);
        storeNums(columns, num, j);
        storeNums(boxes, num, box_index);
      }
    }
  }
  return true;
};

function storeNums(obj, num, i) {
  if (!obj[i]) {
    obj[i] = [num];
  } else {
    obj[i].push(num);
  }
}
