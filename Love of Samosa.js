// Amit went down to the Samosa street to have some. 
// But he only has K units of money with him. 
// There are N shops on the street and unfortunately, all of them have only one samosa remaining. 
// You are also given an array A, where Ai is the cost of a samosa on the i'th shop.

// Find the maximum samosas that Amit can eat.

function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var N=size[0];
    var R=size[1];
    var arr=input[1].split(" ").map(Number);
    arr.sort(function(a,b){return a-b;});
    solve(N,R,arr);
    
}
function solve(N,R,arr){
    var ans=0;
    var res=0;
    for(var i=0;i<N;i++){
        ans+=arr[i];
        if(ans<=R){
            res++;
        }
        else{
            break;
        }
    }
    console.log(res);
    
    
    
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