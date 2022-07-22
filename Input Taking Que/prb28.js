function mapChar(K, N, str) {
    var user = {
        a: K,
        b: K + 1,
        c: K + 2,
        d: K + 3,
        e: K + 4,
        f: K + 5,
        g: K + 6,
        h: K + 7,
        i: K + 8,
        j: K + 9,
        k: K + 10,
        l: K + 11,
        m: K + 12,
        n: K + 13,
        o: K + 14,
        p: K + 15,
        q: K + 16,
        r: K + 17,
        s: K + 18,
        t: K + 19,
        u: K + 20,
        v: K + 21,
        w: K + 22,
        x: K + 23,
        y: K + 24,
        z: K + 25


    }
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        for (key in user) {
            if (str[i] == key) {
                sum = sum + user[key];
            }
        }
    }
    console.log(sum)
}


function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var K = +input[0];
    var N = +input[1];
    var str = input[2];
    mapChar(K, N, str)

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`30
3
abc`);
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