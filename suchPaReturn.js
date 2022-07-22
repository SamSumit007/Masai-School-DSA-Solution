
function sPR(N, k, arr) {
    function compareNumbers(a, b) {
        return a - b;
    }
    arr.sort(compareNumbers);
    // console.log(arr)
    var left = 0;
    var count = 0;
    var right = N - 1;

    while (right >= 0 && left < N) {
        if (arr[left] + arr[right] > k) {
            right--;
            
        } else if (arr[left] + arr[right] < k) {
            left++;
        } else if (arr[left] + arr[right] == k) {
            count++;
            break;
        }
    }


    if (count > 0) {
        console.log("1");
    } else {
        console.log("-1");
    }
}

function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0];
    // console.log(testCases)
    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var arr1 = input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;

        var N = +arr1[0];
        var k = +arr1[1];

        sPR(N, k, arr);
    }

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`1
2 4
2 -2`);
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