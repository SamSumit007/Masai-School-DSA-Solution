// Given an array A having N positive integers. Count the number of non-empty subsets of array A such that each subset has exactly K odd numbers.

function runProgram(input){
    var input=input.split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var abc=input[line++].split(" ").map(Number);
        var n=abc[0];
        var k=abc[1];
        var arr=input[line++].split(" ").map(Number);
        solve(n,k,arr);
    }
    
}
function solve(N,K,arr)
{
    // console.log(N,K,arr)
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
    var count=0;
    for(var i=0;i<array.length;i++)
    {
        var c=0;
        for(var j=0;j<array[i].length;j++)
        
        {
            if(array[i][j]%2!=0){
                c++;
            }
        }
        if(c==K)
        {
            count++;
        }
    }
    console.log(count);
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