 
 let ans = [];
 
 function search(N, arr, x, q, count){
    // console.log(N, arr, x, q, count);
    for(let i = 0; i < N; i++){

        if( arr[i] >= q && arr[i] <= x){
            count++;

        }
    }
    
    ans.push(count);
    // return count;

 }

function runProgram(input) {
    var input = input.trim().split("\n");

    var N = +input[0];

    var arr = input[1].trim().split(" ").map(Number);

    var testCases = +input[2];

    var line = 3;
    

    for(var i = 0; i < testCases; i++){
        // arr.sort()

        var arr1 = input[line].trim().split(" ").map(Number);

        var q = +arr1[0];
        var x = +arr1[1];

        var count = 0;
        

        line++;

       search(N, arr, x, q, count);
    }
    console.log(ans.join(" "));
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
10 1 10 3 4
4
1 10
2 9
3 4
2 2
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