function add(ac, el) {
    return ac + el;
}

function subarrays(arr, k) {
    var count = arr.length;
    var ans = 0;
    while (count > 0 && ans == 0) {
        var i = 0;
        while (i + count <= arr.length) {
            var temp = arr.slice(i, i + count);
            if (temp.reduce(add) % k != 0)
                ans++;
            i++;
        }
        count--;
    }
    return ans;

}

function runProgram(input) {
    var newInput = input.split("\n");
    var nk = newInput[0].split(" ").map(Number);
    var k = nk[1];
    var arr = newInput[1].split(" ").map(Number);
    console.log(subarrays(arr, k));


}
if (process.env.USERNAME === "") {
    runProgram(`4 3
2 3 4 6`);
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