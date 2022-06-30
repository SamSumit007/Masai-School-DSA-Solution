// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer arrayflowerbedcontaining0's and1's, where0means empty and1means not empty, and an integern, find out if ifnnew flowers can be planted in theflowerbedwithout violating the no-adjacent-flowers rule.

//method 1
function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var size=input[line++].split(" ").map(Number);
        var m=size[0];
        var n=size[1];
        var arr=input[line++].split(" ").map(Number);
        solve(m,n,arr);
    }
    
}
function solve(m,n,arr){
    var count=0;
    for(var i=0;i<m;i++){
        
        if(arr[i]==0){
            
            var left=arr[i-1];
            var right=arr[i+1];
            
            if(i==0){
               left=0;
            }
            if(i==m-1){
              right=0;
            }
            if(left==0 && right==0){
               arr[i]=1;
               count++;
            }
            
            
        }
        
    }
    
    if(count>=n){
        console.log("Yes");
    }
    else{
        console.log("No");
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

//method 2

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var size=input[line++].split(" ").map(Number);
        var m=size[0];
        var n=size[1];
        var arr=input[line++].split(" ").map(Number);
        solve(m,n,arr);
    }
    
}
function solve(m,n,arr){
    var count=0;
    for(var i=0;i<m&&n>0;i++){
        
        if(arr[i]==0){
            
            var left=arr[i-1];
            var right=arr[i+1];
            
            if(i==0){
               left=0;
            }
            if(i==m-1){
              right=0;
            }
            if(left==0 && right==0){
               arr[i]=1;
               n--;
            }
            
            
        }
        
    }
    
    if(n<=0){
        console.log("Yes");
    }
    else{
        console.log("No");
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