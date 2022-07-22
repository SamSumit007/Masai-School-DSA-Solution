function    detectiveL(mat, r,c, newr, newc, arr, curr, currl){

    // console.log(mat, r, c);
   
    if(newr < 0 || newc > c-1 || curr > c){
        return;
    }

    for(var l = 0; l < r; l++){
        
        arr.push(mat[l][newc]);
    }

    for(var m = curr; m < c; m++ ){
        arr.push(mat[newr][m])
    }

  return  detectiveL(mat, r,c, newr-1, newc+1, arr,curr+1, currl+1)
}


function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];
let line = 1;
   for(let i = 0; i < testCases; i++){
        let mat = [];

        let [r, c] = input[line].trim().split(" ").map(Number);
        line++;

        for( let k = 0; k < r; k++){

        
                let eachRow = input[line].trim().split(" ").map(Number);
                line++;

                let row = [];

                for(var j = 0; j < c; j++){
                    row.push(eachRow[j]);
                }

                mat.push(row);

        }

        let arr = [];
        let newr = r-1;
        let newc = 0;
        let curr = 1
        detectiveL(mat, r,c, newr, newc, arr, curr, 0)

        console.log(arr.join(" "));
   }

   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
3 3
1 2 3
4 5 6
7 8 9
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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
      process.exit(0) ;
    });
  }