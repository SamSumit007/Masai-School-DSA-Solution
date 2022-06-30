// You are a thief carrying a single bag with limited capacity S. The museum you stole had N artifact that you could steal. Unfortunately you might not be able to steal all the artifact because of your limited bag capacity.

// You have to cherry pick the artifact in order to maximize the total value (<= 2000000) of the artifacts you stole.

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var size=input[line++].split(" ").map(Number);
        var S=size[0];
        var N=size[1];
        var item=[];
        var value=[];
        for(var j=0;j<N;j++){
            var a=input[line++].split(" ").map(Number);
            item.push(a[0]);
            value.push(a[1]);
            
        }
        solve(S,N,item,value);
    }
    
}
function solve(S,N,item,value){
    var dp=[];
    for(var a=0;a<=N;a++){
        var z=[];
        for(var b=0;b<=S;b++){
            z.push(-1);
        }
        dp.push(z);
    }
    
    //console.log(dp)
    function steal(item,value,S,n){
        if(dp[n][S]!=-1){
            return dp[n][S];
        }
        if(n==0||S==0){
            return 0;
        }
        if(item[n-1]<=S){
            dp[n][S]=Math.max(value[n-1]+steal(item,value,S-item[n-1],n-1),steal(item,value,S,n-1));
        }
        else{
            dp[n][S]=steal(item,value,S,n-1);
        }
        return dp[n][S];
    }
    
    console.log(steal(item,value,S,N))
    
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