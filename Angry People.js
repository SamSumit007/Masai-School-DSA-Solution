// You have a circular dining table and N angry people.You need to place them on the table.Each person has a anger value.

// You can place them in any order on the circular table.Once you place them you need to calculate the Danger value of your arrangement.

// The danger value of the arrangement is the maximum difference of anger values of all the adjacent seated persons.You need to keep this danger value as low as possible.

// The optimal arrangement is :

// 5

// /             \

// 6                  8

// \           /

// 10

// The adjacent pair values are 1 for(6-5),3 for(8-5),4 for(10-6),2 for(10-8).Since danger value is the maximum value so it's 4.


function runProgram(input){
    var input=input.split("\n");
    var n= +input[0];
    var arr=input[1].split(" ").map(Number);
    console.log(solve(n,arr));
    
}
function solve(n,arr){  
    arr.sort(function(a,b){return a-b;});
    var flag=false;
    if(n%2==0){
        flag=true;
        n=n-1;
    }

    var danger=0;
    var left=arr[0];
    var right=arr[0];
    for(var i=1;i<n;i+=2){
        leftDiff=arr[i]-left;
        rightDiff=arr[i+1]-right;
        left=arr[i];
        right=arr[i+1];
        danger=Math.max(danger,leftDiff,rightDiff);
    }
    if(flag){
        rightDiff=arr[n]-right;
        right=arr[n];
        danger=Math.max(danger,rightDiff);
    }
    return Math.max(danger,right-left);
    
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