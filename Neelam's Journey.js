// Neelam has N friendsstudying in various schools. She wants to find a new friend in(N+1)th school. Assume all schools are separated by 1 unit distance. To reach(N+1)th school she has to board a bus.

// The ith school would cost ofC[i]rupees to travel 1 unit of distance. In other words, the bus fare to travel from the ith school to the jth school isabs(i – j ) * C[i]rupees.

// The task is to find the minimum bus fare to travel from school 1 to school(N + 1)i.e. beyond the last school.

function runProgram(input){
    var input=input.split("\n");
    var n= +input[0];
    var arr=input[1].split(" ").map(Number);
    solve(n,arr);
    
}
function solve(n,arr){
    var ans=0;
    var min=arr[0];
    for(var i=0;i<n;i++){
        if(arr[i]>=min){
            ans+=min;
        }
        else{
            min=arr[i];
            ans+=min;
        }
    }
    
    console.log(ans);
    
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