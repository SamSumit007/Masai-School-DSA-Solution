// You want all your bricks to be stacked. Currently, you have N stacks of bricks each with height H1, H2, H3, ... HN(assuming all bricks are of 1 unit height).You did not like the configuration much and want to change the height of each stack. To increase the height of a particular stack you can add some bricks to it and to decrease the height you can take out some bricks from that stack.

// You require X units of effort for putting up an item onto the stack and Y units of effort for removing it. Find an integer which is the minimum effort required.

// NOTE: You just need to make stacks of a given height. Not necessarily each stack should be made from its corresponding stack.

function runProgram(input){
    var input=input.split("\n");
   
    var tc=+input[0];
     var line=1;
     
    
    for(var j=0;j<tc;j++){
        var N=+input[line++];
        var X=+input[line++];
        var Y=+input[line++];
        var a=[];
        var b=[];
       for(var i=0;i<N;i++){
          var arr=input[line++].split(" ").map(Number);
          a.push(arr[0]);
          b.push(arr[1]);
        }
        solve(N,X,Y,a,b);
    }
}

function solve(N,X,Y,a,b){
    a.sort(function(a,b){return a-b;});
    b.sort(function(a,b){return a-b;});
    //console.log(N,X,Y,a,b)
    var ans=0;
    for(var i=0;i<N;i++){
        if(a[i]==b[i]){
            continue;
        }
        else if(a[i]<b[i]){
            while(a[i]!=b[i]){
                a[i]++;
                ans+=X;
            }
        }
        else if(a[i]>b[i]){
            while(a[i]!=b[i]){
                a[i]--;
                ans+=Y;
            }
        }
        
    }
    
    console.log(ans)
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