// You are in Koramangala and want to go to BTM 2nd Stage, but roads are blocked. Instead there are n trampolines kept on the route. These trampoline are different in a way that you don't just jump on it, but it takes you forward as well. There is a number written on all the trampolines that indicates the maximum number of trampoline you can jump from there.

// NOTE: The last trampoline is in BTM 2nd stage (where you want to reach)

// For instance, assume there are 6 trampolines with numbers 1,3,6,1,0,9 written on it. So, from first trampoline you can jump at most 1 trampoline and move to second trampoline with number 3, from which you can take a jump of at max 3 trampolines, that is, you can go to 3rd, 4th or the 5th trampoline..so on..

// So, in this case, you can reach to BTM in just 3 steps: (1 -> 3 -> 6 -> last(9))

function runProgram(input){
    var input=input.split("\n");
    var n= +input[0];
    var arr=input[1].split(" ").map(Number);
    console.log(solve(n,arr));
    
}
function solve(n,arr){
    if(n<=1){
        return 0;
    }
    if(arr[0]==0){
        return -1;
    }
    
    let max=arr[0];
    let step=arr[0];
    let jump=1;
    for(var i=1;i<n;i++){
        if(i==n-1){
            return jump;
        }
        else{
            max=Math.max(max,i+arr[i]);
            step--;
        }
        if(step==0){
            jump++;
            if(i>=max){
                return -1;
            }
            step=max-i;
        }
    }
    return -1;
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