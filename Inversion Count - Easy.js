// You are given an integer arraynumsand you have to output/print a newcountsarray. Thecountsarray has the property, wherecounts[i]is the number of smaller elements to the right ofnums[i].



// Note: counts[i] represents the number of elements which are smaller than nums[i] and are on the right side of nums[i]

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n= +input[line++];
        var arr=input[line++].split(" ").map(Number);
        
        solve(n,arr);
    }
    
}

function solve(n,arr){
    var dp=[];
    for(var a=0;a<n;a++){
        dp.push(0);
    }
    //console.log(dp)
    for(var i=0;i<n-1;i++){
        var count=0;
        for(var j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                count++;
            }
        }
        dp[i]=count;
    }
    console.log(dp.join(" "))
    
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