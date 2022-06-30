// Given an array of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var N=size[0];
    var X=size[1];
    var arr=input[1].split(" ").map(Number);
    solve(N,X,arr);
    
}
function solve(N,X,arr){
    
    var count=0;
    function countsum(arr,n,x,position,c){
        
        if(c==x){
            count++;
            return;
        }
        if(c>x){
            return;
        }
        else{
            for(var i=position;i<n;i++){
                c+=arr[i];
                countsum(arr,n,x,i+1,c);
                c-=arr[i];
            }
            return;
        }
    }
    
    countsum(arr,N,X,0,0);
    console.log(count);
    
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