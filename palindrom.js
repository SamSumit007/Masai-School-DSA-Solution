function checkpali(arr){
        var left= 0;
        var right= arr.length -1;
            
        while(left<right){
            if( arr[left] != arr[right]){
                return false;
                left++;
                right--;
                break;
            }
            
        }
    return true;

}
 


function runProgram(input) {
    var arr = input.split("").map(Number);
    // console.log(arr)
        checkpali(arr)
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`1221`);
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