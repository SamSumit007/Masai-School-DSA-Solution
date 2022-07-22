//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
   
        var n = +input[0];
        var arr = input[1].trim().split(" ").map(Number);
        smallerelement(n,arr)
    }
function smallerelement(n,arr) {
    //a = stack
    var a = [];
    var result = [];
    for(var i = 0;i<n;i++){
        while(a.length>0&&a[a.length-1]>=arr[i]){
            a.pop();
        }
        if(a.length==0){
            result[i]=-1;
        }else{
            result[i]=a[a.length-1];
        }
        a.push(arr[i]);
    }
 	console.log(result.join(" "))
}





process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});