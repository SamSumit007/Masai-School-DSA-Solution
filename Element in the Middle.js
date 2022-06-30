//Given an unsorted array of size, N. 
//Find the first element in the array such that all of its left elements are smaller and all right elements to it are greater than it.

function runProgram(input) {
    var input = input.split("\n");
    var N = +(input[0]);
    var arr = input[1].split(" ").map(Number);
    middle(N, arr);

}
function middle(N, A) {
    var flag = false;
    var element = 0;
    for (var i = 1; i < N; i++) {
        var flag1 = true;
        for (var j = i - 1; j >= 0; j--) {
            if (A[j] > A[i]) {
                flag1 = false;
            }

        }

        var flag2 = true;
        for (var k = i + 1; k < N; k++) {
            if (A[k] < A[i]) {
                flag2 = false;
            }

        }
        if (flag1 && flag2) {
            flag = true;
            element = A[i];
            break;
        }


    }
    if (flag) {
        console.log(element);
    }
    else {
        console.log(-1);
    }


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