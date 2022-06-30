//Given an array of n integers, the array is sorted. 
//You have to remove the duplicates, print only unique elements, do it in place. i.e O(1) space


function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var N= +input[line];
        line++;
        var arr=input[line].trim().split(" ").map(Number);
        line++;
        solve(N,arr);
    }
    
}
function solve(N,arr){
    var stack=[];
    for(var i=0;i<N;i++){
        if(stack[stack.length-1]==arr[i]){
            stack.pop();
            stack.push(arr[i]);
        }
        else{
            stack.push(arr[i]);
        }
    }
    
    console.log(stack.length);
    console.log(stack.join(" "));
    
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