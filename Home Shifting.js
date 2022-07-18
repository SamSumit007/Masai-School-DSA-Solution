Description

There are n packages placed orderly in a row which has to be transported to the new home within d days.

The weights of the packages are provided in the array W where the ith element has a weight of Wi. Each day, the truck is loaded with packages in the order they are placed in the row one by one. The truck cannot be loaded with more than the maximum weight capacity of the truck.

Find the least weight capacity of the truck needed so that all the packages can de be delivered (in the order of the provided array) within d days.


function HomeShifting(weights, days) {
 
    let left = -Infinity, right = 0;
    for (var weight of weights) {
      left = Math.max(left, weight);
      right += weight;
    }
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      let groups = 1, sum = 0;
      for (var weight of weights) {
        sum += weight;
        if (sum > mid) {
          groups++;
          sum = weight;
        }
      }
    
      if (groups <= days) right = mid;
      else left = mid + 1;
    }
    return left;
  };




function runProgram(input) {
 input = input.split("\n");
  var tc = +input[0];
  var line = 1;
   for(var i = 0; i < tc; i++){
      
  var [n,days] = input[line++].trim().split(" ").map(Number);

      var weights = input[line++].split(" ").map(Number);
     
     console.log(HomeShifting(weights, days));  
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

