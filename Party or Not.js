
// Ashutosh has N friends and he wants to give a party to his C friends on his birthday. 
// Ashutosh knows the amount he will have to spend on each of his N friends in party. 
// Given the expense amount of each of the N friends, comment if it is possible for Ashutosh to give a party to his C friends if he has just R rupees.

function runProgram(input){
    var input=input.split("\n");
    var ncr=input[0].split(" ").map(Number);
    var N=ncr[0];
    var C=ncr[1];
    var R=ncr[2];
    var arr=input[1].split(" ").map(Number);
    solve(N,C,R,arr);
}
function solve(N,C,R,arr){
    //console.log(N,C,R,arr)
    var flag=false;
    function partyOrNot(N,C,R,arr,position,newarr){
        var sum=0;
        for(var j=0;j<newarr.length;j++){
            sum+=newarr[j];
        }
        
        if(newarr.length==C && sum<=R){
            flag=true;
            return;
        }
        if(sum>R||newarr.length>C){
            return;
        }
        else{
            for(var i=position;i<N;i++){
                newarr.push(arr[i]);
                partyOrNot(N,C,R,arr,i+1,newarr);
                newarr.pop();
            }
            return;
        }
    }
    
    
    partyOrNot(N,C,R,arr,0,[]);
    //console.log(flag);
    if(flag){
        console.log("Party")
    }
    else{
        console.log("Sad")
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

//method second by sorting and brute force
function runProgram(input){
  var input=input.split("\n");
  var ncr=input[0].split(" ").map(Number);
  var N=ncr[0];
  var C=ncr[1];
  var R=ncr[2];
  var arr=input[1].split(" ").map(Number);
  solve(N,C,R,arr);    
  
  
}
function solve(N,C,R,arr){
  arr.sort(function(a,b){return a-b;});
  var sum=0;
  for(var i=0;i<C;i++){
      sum+=arr[i];
  }
  if(sum<=R){
      console.log("Party");
  }
  else{
      console.log("Sad");
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