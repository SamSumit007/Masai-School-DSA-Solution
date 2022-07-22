function checkVowel(size, str){
    var count = 0;
    for( var i = 0 ;i  < size ; i++){
        if((str[i]== "a") || (str[i] == "e") || (str[i] == "i") || (str[i]== "o") || (str[i] == "u")) {
            count++;
        }
    }
    if(count > 0){
        console.log("Yes")
    }else{
        console.log("No")
    }
}


function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var size = +input[0];
    var str = input[1];
        checkVowel(size,str)

}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`4
stvr`);
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