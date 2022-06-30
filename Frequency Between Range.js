// The first line contains N , the number of integers and Q the number of queries.

// The second lines contains N integers

// The next Q lines contains three integers left , right , value

function runProgram(input){
    var input=input.split("\n");
    var s=input[0].split(" ").map(Number);
    var n=s[0];
    var q=s[1];
    var line=2;
    var arr=input[1].split(" ").map(Number);
    for(var i=0;i<q;i++){
        var size=input[line++].split(" ").map(Number);
        var l=size[0];
        var r=size[1];
        var v=size[2];
        solve(n,arr,l,r,v);
    }
    
}
function solve(n,arr,left,right,value){
    
    var count=0;
    for(var i=left-1;i<right;i++){
        if(arr[i]==value){
            count++;
        }
    }
    
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