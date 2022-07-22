function matchWon(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours){
    if(NzScore > EngScore){
        console.log("New Zealand");
    }else if(NzScore< EngScore){
        console.log("England");
    }else if(NzSuperOver>EngSuperOver){
        console.log("New Zealand");
    }else if(NzSuperOver<EngSuperOver){
        console.log("England");
    }else if(NzFours>EngFours){
        console.log("New Zealand");
    } else if (NzFours < EngFours) {
        console.log("England");
    }
    
}

function runProgram(input) {
    // Write code here
    var input = input.split("\n")
    var Nz = input[0].split(" " ).map(Number);
    var [NzScore, NzSuperOver, NzFours] = Nz;
    var Eng = input[1].split(" ").map(Number);
    var [EngScore, EngSuperOver, EngFours] = Eng;
    matchWon(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours)
}

if (process.env.USERNAME === "siddhesh") {
    runProgram(`241 15 21
241 15 26`);
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