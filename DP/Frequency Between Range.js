function freq(arr, left, right, val, N){

    // console.log(arr, left, right, val);
  let count = 0;
    for(let i = left-1; i <= right-1; i++){
      
          if(arr[i] == val){
            count++;
          }
      
    }
    console.log(count);
}


function runProgram(input) {
   var input = input.trim().split("\n");

   let [N, q] = input[0].trim().split(" ").map(Number);

   let arr = input[1].trim().split(" ").map(Number);
    let line = 2;
   for(let i = 0; i < q; i++){

        let [left, right, val] = input[line].trim().split(" ").map(Number);
        line++;
        freq(arr, left, right, val, N)

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`6 2
1 5 3 2 3 2 
3 6 2
4 4 2
`);
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