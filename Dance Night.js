// Masai School will be hosting its Prom Night on 29th Feb.
// There would be M boys and N girls at the prom tonight. 
// Each boy wants a girl who is strictly shorter than him. 
// A girl can dance with only one boy and vice-versa.

// Given the heights of all the boys and girls comment whether it is possible for all boys to get a girl.


function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var size=input[line++].split(" ").map(Number);
        var m=size[0];
        var f=size[1];
        var male=input[line++].split(" ").map(Number);
        var female=input[line++].split(" ").map(Number);
        solve(m,f,male,female);
    }
    
}
function solve(m,f,male,female){
    male.sort(function(a,b){return a-b;});
    female.sort(function(a,b){return a-b;});
    var flag=true;
    for(var i=0;i<m;i++){
        if(male[i]<=female[i]){
            flag=false;
        }
    }
    if(flag){
        console.log("YES")
    }
    else{
        console.log("NO")
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