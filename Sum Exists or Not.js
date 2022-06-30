// Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.

// If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.

function runProgram(input){
    var input=input.split("\n");
    var N= +input[0];
    var arr=input[1].split(" ").map(Number);
    var S= +input[2];
    solve(N,arr,S);
    
}
function solve(N,arr,S){
    var flag=false;
    function subset(n,arr,s,sum,position){
        if(sum==s){
            flag=true;
            return;
        }
        if(sum>s){
            return;
        }
        else{
            for(var i=position;i<n;i++){
                //sum+=arr[i];
                position++;
                subset(n,arr,s,sum+arr[i],position);
                //sum-=arr[i];
            }
            return;
        }
        
    }
    
    subset(N,arr,S,0,0);
    if(flag){
        console.log("yes");
    }
    else{
        console.log("no");
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