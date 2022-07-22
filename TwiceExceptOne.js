function tEO(N, arr){
    // console.log(N, arr);

    var obj = {};

    for (var i = 0; i < N; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }

    }

    // console.log(obj);
    var out = "";
    for (key in obj) {
        if(obj[key] == 1){
            console.log(key);
            
        }
    }

    // console.log(out);
}

function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases =  +input[0];
   var line = 1;

   for( var i = 0; i< testCases; i++){
       var N = input[line];
       line++;
       var arr = input[line].trim().split(" ").map(Number);
       line++;
        
       tEO(N, arr);
   }

  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
1
5
5
1 2 1 3 2`);
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