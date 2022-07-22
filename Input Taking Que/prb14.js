function secondmax(a,b,c){
    if(((a>b) || (a>c)) && ((a<b) || (a < c))){
        console.log(a);
    }else if(((b>a) || (b>c)) && ((b<a) || (b<c))){
        console.log(b);
    }else if(((c>a) || (c> b)) && ((c<a) || (c<b))){
        console.log(c);
    }
}

function runProgram(input) {
    // Write code here
    var input = input.split(" ").map(Number);
    var[a, b, c] = input;
        secondmax(a, b, c);

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`3 7 5`);
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