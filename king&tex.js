function texColl(N, arr){
    
    function compare(a,b){
        return a-b;
    }

    arr.sort(compare);
    // console.log(arr);

    var left = 0;
    var right = arr.length - 1;

    var sum = 0;
    while( left < right ){
        var max = Math.max(arr[left], arr[right])
            sum = sum + max;
            left++;
            right--;
     }
     console.log(sum);
}


function runProgram(input) {
    
    var input = input.split("\n");
    
    var N = +input[0];
    var arr = input[1].split(" ").map(Number);
        texColl(N, arr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
1 3 1 2`);
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