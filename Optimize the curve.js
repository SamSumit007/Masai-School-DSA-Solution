// Ross is skilled in calculations, he can do most of the complex calculations in head but he is stuck with this quesiton and wants your help.

// Ross wants to solve the given mathematical equation which states that, he needs to find the east non-negative integer Xo, that shall make the value of given equation atleast K i.e.,

// A Xo^2 + B Xo + C >= K

// He is given A,B,C and K, which form the above equation. He has to answer T independent test cases.

// Output -1 if there is no possible positive value of Xo

function runProgram(input){
    var input=input.split("\n");
    var tc=input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var size=input[line++].split(" ").map(Number);
        var A=size[0];
        var B=size[1];
        var C=size[2];
        var K=size[3];
        console.log(solve(A,B,C,K));
    }
    
}
function solve(A,B,C,K){
    if(K<C){
        return -1;
    }
    result=-1;
    low=0;
    high=K-C;
    while(low<=high){
        mid=Math.floor(low+(high-low)/2);
        s=calcsum(A,B,C,mid);
        if(s>K){
            result=mid;
            high=mid-1;
        }
        else if(s<K){
            low=mid+1;
        }
        else{
            result=mid;
        }
    }
    return result;
}

function calcsum(A,B,C,mid){
    sum=A*mid*mid +B*mid+C;
    return sum;
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