//You are given an array A of size N. For each element, print the closest greater element, to that particular element. 
//If there is no greater element for a particular element, print -1.
//If the two values, are equidistant from a particular value, print the value that occurs to the left of it.

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++)
    {
        var N= +input[line];
        line++;
        var arr=input[line].trim().split(" ").map(Number);
        line++;
        solve(N,arr);
    }
    
}
function solve(N,arr)
{
   var stack1=[]; //index
   var stack2=[];  //values of arr
   var ans1=[];        //first ans for greater left side
   var distance1=[];      // distance from aar[i]
   for(var i=N-1;i>=0;i--){
       while(stack2.length !=0 && arr[i]>=stack2[stack2.length-1]){
           stack1.pop();
           stack2.pop();
       }
       if(stack2.length==0){
           distance1[i]=Infinity;
           ans1[i]=-1;
       }
       else{
           distance1[i]=Math.abs(i-stack1[stack1.length-1]);
           ans1[i]=stack2[stack2.length-1];
       }
       stack1.push(i);
       stack2.push(arr[i]);
   }
   
   var stack1=[]; //index
   var stack2=[];  //values of arr
   var ans2=[];        //first ans for greater right side
   var distance2=[];      // distance from aar[i]
   for(var i=0;i<N;i++){
       while(stack2.length !=0 && arr[i]>=stack2[stack2.length-1]){
           stack1.pop();
           stack2.pop();
       }
       if(stack2.length==0){
           distance2[i]=Infinity;
           ans2[i]=-1;
       }
       else{
           distance2[i]=Math.abs(i-stack1[stack1.length-1]);
           ans2[i]=stack2[stack2.length-1];
       }
       stack1.push(i);
       stack2.push(arr[i]);
   }
   
   
    var ans=[];
    for(var i=0;i<N;i++){
        if(distance1[i]<distance2[i]){
            ans.push(ans1[i]);
        }
        else{
            ans.push(ans2[i]);
        }
    }
    
    console.log(ans.join(" "));
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