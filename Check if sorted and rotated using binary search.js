function runProgram(input){
    var input=input.split("\n");
    var n= +input[0];
    var arr=input[1].split(" ").map(Number);
    solve(n,arr);
    
}
function solve(n,arr){
    var mid=idxpiviot(n,arr);
    //var idx=arr.indexOf(mid);
    //console.log(mid,idx)
    var flag1=true;
    for(var i=0;i<mid-1;i++){
        if(arr[i]>arr[i+1]){
            flag1=false;
            break;
        }
    }
    var flag2=true;
    for(var i=mid;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            flag2=false;
            break;
        }
    }
    var flag=true;
    for(var i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            flag=false;
            break;
        }
    }
    if(flag){
        console.log("NO");
    }
    else if(flag1&&flag2){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
}

function idxpiviot(n,arr){
  let low = 0;
    let high = n-1;
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] >= arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return (low);
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