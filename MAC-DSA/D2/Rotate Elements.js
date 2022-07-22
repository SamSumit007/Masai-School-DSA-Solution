const PrintMat = (mat) => {
    let row = mat.length;
    let column = mat[0].length;
    for (let i = 0; i < row; i++) {
      let res = "";
      for (let j = 0; j < column; j++) {
        res += mat[i][j] + " ";
      }
      console.log(res);
    }
  };
  
  const findRotation = (mat) => {
    let left = 0,
      right = mat[0].length - 1,
      up = 0,
      down = mat.length - 1;
    let n = mat.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
      let previous = mat[up + 1][left];
      for (let j = left; j <= right; j++) {
        [mat[up][j], previous] = [previous, mat[up][j]];
      }
      up++;
      for (let j = up; j <= down; j++) {
        [mat[j][right], previous] = [previous, mat[j][right]];
      }
      right--;
      for (let j = right; j >= left; j--) {
        [mat[down][j], previous] = [previous, mat[down][j]];
      }
      down--;
      for (let j = down; j >= up; j--) {
        [mat[j][left], previous] = [previous, mat[j][left]];
      }
      left++;
    }
    return mat;
  };
  
  const runProgram = (input) => {
    input = input.trim().split("\n");
    let mat = [];
    for (let i = 1; i < input.length; i++) {
      mat.push(input[i].trim().split(" ").map(Number));
    }
    let x = findRotation(mat);
    PrintMat(x);
  }
if (process.env.USERNAME === "Ajit") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

