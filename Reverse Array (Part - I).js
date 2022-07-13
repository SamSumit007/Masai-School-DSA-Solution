You are given an array, and an integer K

You have to reverse the array from0 to K, keeping the rest of the elements in the same order

You must not use any extra space or create a new array for the same

Ensure you are not using any extra array to achieve this, and not directly printing it


Input
The first line of the input contains the value ofNandK

The next line containsNspace separated values denoting the elements of the array

Constraints

1 <= N <= 100

1 <= arr[i] <= 100


Output
Reverse the array from0 to K, and then print the array on a single line

Sample Input 1 

6 3
1 2 3 4 5 6
Sample Output 1

4 3 2 1 5 6



function reverse( a, n, k)
{
    if (k > n)
    {
        console.log("-1");
        return;
    }
 
    
    for (let i = 0; i < (k/2); i++)
    {
      let temp = a[i] ;
      a[i] = a[k-i] ;
      a[k-i] = temp ;
    }}
function runProgram(input) {
  // Write code here
 input = input.split("\n")
  
  var [n,k] = input[0].trim().split(" ").map(Number);

      var a = input[1].split(" ").map(Number);
     
     //console.log(n,k, a);  
     reverse(a, n, k);
 bag = "";
for(let i = 0; i < n; i++){
    bag+= a[i]+" ";
} console.log(bag);
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

