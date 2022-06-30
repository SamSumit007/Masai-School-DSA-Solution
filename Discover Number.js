//discover numbers in given array

function runProgram(input){
    var input=input.split("\n");
    var ab=input[0].split(" ").map(Number);
    var n=ab[0];
    var tc=ab[1];
    var line=2;
    var arr=input[1].split(" ").map(Number);
    arr.sort(function(a,b){return a-b});
    for(var i=0;i<tc;i++){
        var k=input[line];
        line++;
        var mid;
        var search=binary(arr,k,0,n-1,mid);
        if(search){
            console.log("YES");
        }
        else{
            console.log("NO");
        }
       
    }
    
}

    function binary(arr,k,low,high,mid){
        if(high>=low){
            mid= Math.floor(low+(high-low)/2);
        
            if(arr[mid]==k){
                return true;
            }
            else if(arr[mid]>k){
                return binary(arr,k,low,mid-1,mid);
            }
            else{
                return binary(arr,k,mid+1,high,mid);
            }
        }
        return false;
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