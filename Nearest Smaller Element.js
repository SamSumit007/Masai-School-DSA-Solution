
You are given an array A of size N. For each element, in the array find the closest element with a smaller value, than the current value. If no such element exists, print -1. If two values are equidistant to the current value, print the one that occurs to the left of it. Refer the sample I/O for better understanding.


Input
The first line contains T, the number of test cases. The first line of each test case contains N, the size of the array.

Next line contains N space separated integers denoting the closest smaller values, or -1, if no such values exist.

Constraints

1 <= T <= 10

1 <= N <= 10^5

1 <= A[i] <= 10^4


Output
For each test case, print N space separated integers, denoting the nearest smaller elements, or -1 if it does not exists, on a new line.


Sample Input 1 

1
8
39 27 11 4 24 32 32 1
Sample Output 1

27 11 4 1 4 24 1 


function NearestSmallerElem(arr,n){
   let res = [];
    for(let i=0; i<n; i++){
        let ans=-1;//i take minus becz if both condn does not become treue it takes -1 by itself
        let diff = n+1;
        for(let j= i-1; j>=0; j--){
            if(arr[j]<arr[i]){
                ans = arr[j];
                diff = i-j;
                break;
            }
        }
        //traversing the right side
        for(let k=i+1; k<n; k++){
            if(arr[k]<arr[i]){
                let m = k-i;
                if(m<diff){
                    ans = arr[k];
                    break
                }
            }
        }
     res.push(ans);
    }
    console.log(res.join(" "))
}

function runProgram(input){
 input= input.split("\n");
 var tc = +input[0];
 var line= 1;
 for(var i=0; i<tc; i++){
     var n =+input[line++];
var arr = input[line++].trim().split(" ").map(Number);

 //console.log(n, arr);

 NearestSmallerElem(arr,n);
 }
}
  
if (process.env.USER === "Sumit") {
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
