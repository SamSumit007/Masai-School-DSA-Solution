// You are given an array a of N integers a1,a2,…,aN.

// Your task is to respond to the queries like "How many numbers' values are betweenlandrinclusive ?".

function runProgram(input){
    input=input.split("\n");
    var n=+input[0];
    var arr=input[1].split(" ").map(Number);
    arr.sort(function(a,b){return a-b;});
    var tc=+input[2];
    var line=3;
    var ans="";
    // console.log(arr)
    for(var i=0;i<tc;i++)
    {
        var size=input[line++].split(" ").map(Number);
        var a=size[0];
        var b=size[1];
        if(a>arr[n-1])
        {
            ans+=0+" "
        }
        else
        {
            var a1=firstOrLast(arr,a,b,true)
            var b1=firstOrLast(arr,a,b,false)
            ans+=(b1-a1+1)+" ";
            // console.log(first,second)
        }
    }
        console.log(ans)
    
}


var result=0;
function firstOrLast(arr,a,b,bool)
{
    var low=0;
    var high=arr.length-1;
    
    while(low<=high)
    {
        var mid=Math.floor(low+(high-low)/2);
        if(bool)
        {
            if(arr[mid]>=a)
            {
                result=mid;
                high=mid-1;
            }
            else
            {
                low=mid+1
            }
        }
        else
        {
            if(arr[mid]<=b)
            {
                result=mid;
                low=mid+1
            }
            else
            {
                high=mid-1;
            }
        }
    }
    return result;
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