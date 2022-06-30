//You are given two sorted arrays each of length N. 
//Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
    solve(N, arr1, arr2);

}
function solve(N, arr1, arr2) {
    function merge(arr1, arr2) {
        var newarr = [];
        var left = 0;
        var right = 0;
        var cur = 0;
        while (left < arr1.length && right < arr2.length) {
            if (arr1[left] <= arr2[right]) {
                newarr[cur] = arr1[left];
                left++;
                cur++;
            }
            else {
                newarr[cur] = arr2[right];
                right++;
                cur++;
            }
        }
        while (left < arr1.length) {
            newarr[cur] = arr1[left];
            left++;
            cur++;
        }
        while (right < arr2.length) {
            newarr[cur] = arr2[right];
            right++;
            cur++;
        }
        return newarr;
    }

    var newarr = merge(arr1, arr2);
    var bag = '';
    for (var i = 0; i < newarr.length; i++) {
        bag += newarr[i] + " ";
    }
    console.log(bag);
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