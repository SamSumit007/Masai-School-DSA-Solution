function countOccD(N, arr){
    // console.log(N,arr);

    var obj = {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0
    }

    for(var i = 0; i < N; i++){
        obj[arr[i]]++;
    }
    var ans = [];
    // console.log(obj);

    for(key in obj){
        ans.push(obj[key]);
    }

    console.log(ans.reverse().join(" "))
    

    
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var testCase = +input[0];

   var line = 1;
   for(var i = 0; i < testCase; i++){
       var N = +input[line];
       line++;
       var arr = input[line].trim().split("").map(Number);
       line++;

       countOccD(N, arr);
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
5
21321
6
235452`);
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