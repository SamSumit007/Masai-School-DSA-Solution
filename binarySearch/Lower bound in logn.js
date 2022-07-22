function lowerBound(N, K, arr) {

    

    // console.log(N, K, arr);

    let low = 0;

    let high = N - 1;

    let ans = -1;

    while (low <= high) {

        let mid = Math.floor((low +  (high - low) / 2));

        

        if (arr[mid] == K) {

            ans = mid;
            high = mid-1;

        } else if( arr[mid] > K){
            high = mid - 1;
            
        }else{
            low = mid +1;
        }

    }

    return ans;

}


function runProgram(input) {
    var input = input.trim().split("\n");

    var arr1 = input[0].trim().split(" ").map(Number);

    var arr = input[1].trim().split(" ").map(Number);


    var N = +arr1[0];
    var K = +arr1[1];

    console.log(lowerBound(N, K, arr));
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`5 3
1 1 2 2 5`);
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