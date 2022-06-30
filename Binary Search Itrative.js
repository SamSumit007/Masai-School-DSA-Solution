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
    arr.sort(function(a,b){return a-b;});
    var low=0;
    var high=n-1;
    var flag=false;
    while(low<=high){
        var mid= Math.floor(low+(high-low)/2);
        if(arr[mid]==k){
            flag=true;
            console.log(1);
            break;
        }
        else if(arr[mid]<k){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    
    if(!flag){
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