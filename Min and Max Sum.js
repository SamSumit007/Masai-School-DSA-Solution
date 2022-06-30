// You have given an array of size N and an integer M.

// Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

// Do not use built-in functions to sort the array use selection sort Algorithm

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var size=input[line].split(" ").map(Number);
        line++;
        var N=size[0];
        var M=size[1];
        var arr=input[line].split(" ").map(Number);
        line++;
        solve(N,M,arr);
    }
    
}
function solve(N,M,arr){
    sort(arr,N);
    var max=0;
    var min=0;
    for(var i=M;i<N;i++){
        max+=arr[i];
    }
    for(var j=0;j<N-M;j++){
        min+=arr[j];
    }
    console.log(max-min);
}


function sort(array,N)
{
    //N is lenght of array
    for(var i=0; i<N-1; i++)
    {
        var min=i;
        for(var j=i+1;j<N;j++)
        {
            if(array[min] > array[j])
            {
                min=j;
            }
        }
        swap(array,min,i);
    }
}

function swap (array,a,b)
{
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
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