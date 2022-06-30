// Given a number n, and the digit d you have to print the number of occurrences of the digit d in the number n.

function runProgram(input){
    var input=input.split(" ");
    var arr=input[0].split("").map(Number);
    var d= +input[1];
    arr.sort();
    var first=firstlast(arr,d,true);
    var last=firstlast(arr,d,false);
    console.log(last-first+1);
}

    

function firstlast(arr,d,bool){
    var low=0;
    var high=arr.length-1;
    let result=0;
    while(low<=high){
        var mid=Math.floor(low+(high-low)/2);
        if(arr[mid]==d){
            if(bool){
                result=mid;
                high=mid-1;
            }
            else{
                result=mid;
                low=mid+1;
            }
        }
        else if(arr[mid]<d){
            low=mid+1;
        }
        else{
            high=mid-1;
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