// Given an array A having N positive integers. Check if there exists any subsequence of array A that starts and ends with an odd number.

function runProgram(input){
    var input=input.split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n=+input[line++];
        var arr=input[line++].split(" ").map(Number);
        solve(n,arr);
    }
    
    
}
function solve(N,arr)
{
    var array=[];
    function sub(arr,newarr,position)
    {
        if(newarr.length>0)
        {
            var bag=[];
            for(var i=0;i<newarr.length;i++)
            {
                bag.push(newarr[i]);
            }
            array.push(bag);
        }
        if(position==arr.length)
        {
            return;
        }
        else
        {
            for(var i=position;i<arr.length;i++)
            {
                newarr.push(arr[i]);
                sub(arr,newarr,i+1);
                newarr.pop();
            }
        }
    }
    var newarr=[];
    sub(arr,newarr,0);
    // console.log(array)
    
    var flag=false;
    for(var i=0;i<array.length;i++){
        if(array[i][0]%2!=0 && array[i][array[i].length-1]&2!=0){
            flag=true;
            break;
        }
    }
    if(flag){
        console.log("yes");
    }
    else{
        console.log("no");
    }
    
    
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