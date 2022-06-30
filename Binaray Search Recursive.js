//search k in given array

function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var k=size[1];
    var arr= input[1].split(" ").map(Number);
    solve(n,k,arr);
    
}
function solve(n,k,arr){
    arr.sort(function(a,b){return a-b});
    function binary(arr,k,low,high,mid){
        if(high>=low){
            mid= Math.floor(low+(high-low)/2);
        
            if(arr[mid]==k){
                return true;
            }
            else if(arr[mid]>k){
                return binary(arr,k,low,mid-1,mid);
            }
            else{
                return binary(arr,k,mid+1,high,mid);
            }
        }
        return false;
    }
    var mid;
    var search=binary(arr,k,0,n-1,mid);
    if(search){
        console.log(1);
    }
    else{
        console.log(-1);
    }
    
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