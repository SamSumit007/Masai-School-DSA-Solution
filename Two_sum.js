function runProgram(input) {
    var input = input.trim().split("\n");
    // console.log(input);
    var testCases = +input[0];
    
    var line = 1;
    for( var i = 0 ; i < testCases; i++){
        var arr1 = input[line].trim().split(" ").map(Number);
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        var N = +arr1[0];
        var k = +arr1[1];
            twoSum(N, k, arr)
             
    }

    function twoSum(N, k, arr){
        var left = 0;
        var right = N-1;
        var ans= "-1";
        var ans2= "-1";

        while(left<right){
            var sum = arr[left] + arr[right];
            if( sum == k){
                ans = left;
                ans2 = right
                console.log(ans, ans2);
                break;
            }else if( sum > k){
                right--;
            }else if( sum < k) {
                left++;
            }
            
        } 
        
    }
}
if (process.env.USERNAME === "") {
    runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);
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