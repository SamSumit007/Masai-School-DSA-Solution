//You are playing the popular game of "Age of Empires". You are the king of the empire where you have 2N workers.
//All workers will be grouped in the association with size 2, so a total of N associations have to be formed.
//The building speed of the i-th worker is A[i].
//To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, 
//then the association has the resultant building speed x.
//You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.


function runProgram(input) {
    var input = input.split("\n");
    var N = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    solve(N, arr);
}
function solve(N, arr) {

    arr.sort(function (a, b) {
        return a - b;
    });
    var ans = 0;
    for (var k = 0; k < 2 * N; k += 2) {
        ans += arr[k];
    }
    console.log(ans);
}
function swap(array, a, b) {
    var temp = array[a];
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