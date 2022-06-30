//Find the number of ways that a given integer, X, can be expressed as the sum of the Nth powers of unique, natural numbers.


function runProgram(input){
    var input= input.split(" ").map(Number);
    solve(input[0],input[1]);
    
}
function solve(X,N){
    var count=0;
    function ways(newarr,cur,X,N){
        var sum=0;
        for(var i=0;i<newarr.length;i++){
            sum+=newarr[i];
        }
        if(sum==X){
            count++;
            return;
        }
       if(sum>X){
            return;
        }
        else{
            for(var j=cur;j<32;j++){
                newarr.push(j**N);
                ways(newarr,j+1,X,N);
                newarr.pop();
            }
        }
    }
    ways([],1,X,N);
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


//method 2
function runProgram(input){
  var input=input.split(" ").map(Number);
  var X=input[0];
  var K=input[1];
    solve(X,K);
}
function solve(X,K){
    var count=0;
function power(X,K,curr,sum){
    if(sum==X){
        count++;
        return;
    }
    else if(sum>X){
        return;
    }
    else{
        for(var i=curr;i<32;i++){
            sum+=i**K;
            power(X,K,i+1,sum);
            sum-=i**K;
        }
        //return;
    }
}
power(X,K,1,0);
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
