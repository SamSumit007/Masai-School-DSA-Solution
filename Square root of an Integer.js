// You are given an integerN, find the square root of the given integerN. If the integer is not a perfect square, print the floor value of the given integer.

// Note:- The floor value is the largest integer value lesser than a given number K. For example if the value ofK = 3.679, the floor value ofKis3

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n= +input[line];
        line++;
        solve(n);
    }
    
}
function solve(n){
    
    var low=1;
    var high=n;
    while(low<=high){
        var flat=((high-low)/2)-((high-low)/2)%1;
        var mid=low+flat;
        //console.log(mid)
    
        if(mid*mid>n){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    console.log(high);
    
}

 
if (process.env.USER === "") {
  runProgram(``);
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