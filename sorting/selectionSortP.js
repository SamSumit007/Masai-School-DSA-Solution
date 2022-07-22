function selectionSortP(N, arr){
    for( i = 0; i < N-1; i++){
        var min = i;
            for( var j = i+1; j < N; j++){
                if( arr[j] < arr[min]){
                    min = j;
                }
            }
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;

    }
    var out = "";
    for( var i = 0; i < arr.length; i++){
        out += arr[i]+ " ";
    }
    console.log(out);
}


function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].split(" ").map(Number);

        selectionSortP(N, arr)
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`5
3 5 0 9 8`);
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