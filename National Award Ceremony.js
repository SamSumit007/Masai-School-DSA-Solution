Description

It's December time and it's the time to celebrate all the state winners of various sports and award them with their medals. The medal awarded are either Gold, Silver, or Bronze.

We have an array A of n winners where winners are randomly lined up starting from position 0 to position n-1. The gold players have their value assigned as 0, silver as 1, and bronze as 2.

Here all same medals winners are identical.

Since the medals will be distributed uniformly i.e, first all golds then silver, and then subsequently bronze winners, you need to come up with an algorithm to arrange them in the uniform order so that the ceremony can start quickly as you are the event manager.

Since the government computers are not well equipped with the latest technologies, there are some space and time constraints under which you need to execute this task. (Also the sort function doesn't work since it takes O(nlogn)),

The required time complexity is linear and the required space complexity is constant per testcase.

##Fucking Funny 1

function check(arr,n){
    bag = "";
    for(var i=0; i<n; i++){
      bag+= arr[i]+" " ; 
    } console.log(bag);
}


function runProgram(input) {
 input = input.split("\n");
  var tc = +input[0];
  var line = 1;
   for(var i = 0; i < tc; i++){
      var n = +input[line++];

      var arr = input[line++].split(" ").map(Number);
     arr.sort((a,b)=> a-b);
    // console.log(n, arr);  
     check(arr,n);
}}
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

