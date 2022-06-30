// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. 
// Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var k=size[1];
    var arr=input[1].split(" ").map(Number);
    solve(n,k,arr);
    
}
function solve(n,k,arr){
    var index=firstOrlast(arr,k,false);
    if(index==-1){
        for(var i=0;i<arr.length;i++){
            if(arr[i]>k){
                console.log(i);
                break;
            }
        }
    }
    else{
        console.log(index+1);
    }
}
function firstOrlast(arr,k,bool){
    let low=0;
    let high=arr.length-1;
    let result=-1;
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


//method 2

function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var k=size[1];
    var arr=input[1].split(" ").map(Number);
    solve(n,k,arr);
    
}
function solve(n,k,arr){
    
    
    let low=0;
    let high=arr.length-1;
    let result=-1;
    while(low<=high){
        var mid= Math.floor(low+(high-low)/2);
        if(arr[mid]==k){
            
                result=mid;
                low=mid+1;
            
            
        }
        else if(arr[mid]<k){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    
    if(result==-1){
        console.log(low);
    }
    else{
        console.log(result+1);
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