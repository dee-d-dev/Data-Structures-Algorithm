// "PAYPALISHIRING"
let str = "PAYPALISHIRING";
function zigzag(str, rows) {
  let outer_rows = [];
  for (let j = 0; j < rows; j++) {
    outer_rows.push([]);
  }

  let i = 0;
  let index = 0;
  while (index < str.length) {
    if (i < rows) {
      outer_rows[i].push(str[index]);
      index++;
      i++;
    } else if (i === rows) {
      i--;
      while (i > 0 && index < str.length) {
        i--;
        outer_rows[i].push(str[index]);
        index++;
      }
      i++;
    }
  }

  let stringArr = outer_rows.join("");
  let result = "";

  for (i = 0; i < stringArr.length; i++) {
    if (stringArr[i] !== ",") {
      result += stringArr[i];
    }
  }

  console.log(result);
}

// [[], [], []]

zigzag(str, 3);
