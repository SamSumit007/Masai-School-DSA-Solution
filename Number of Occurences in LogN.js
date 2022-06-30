// You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.

function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var k=size[1];
    var arr=input[1].split(" ").map(Number);
    solve(n,k,arr);
    
}
function solve(n,k,arr){
    var first=firstOrlast(arr,k,true);
    var last=firstOrlast(arr,k,false);
    console.log((last-first)+1)
    
}


function firstOrlast(arr,k,bool){
    let low=0;
    let high=arr.length-1;
    let result=0;
    while(low<=high){
        var mid= Math.floor(low+(high-low)/2);
        if(arr[mid]==k){
            if(bool){
                result=mid;
                high=mid-1;
            }
            else{
                result=mid;
                low=mid+1;
            }
        }
        else if(arr[mid]<k){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return result;
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