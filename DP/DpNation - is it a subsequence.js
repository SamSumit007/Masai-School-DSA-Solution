


function runProgram(input) {
    var input = input.trim().split("\n");
    
    let testCases = +input[0];
    let line = 1;
    for(let i = 0; i < testCases; i++){
        
        let s1 = input[line].trim().split("");
        line++;
        let s2 = input[line].trim().split("");
        line++;
        let N = s1.length;
        
        
        
        dpNation(s1, s2, N)
        
        
        function   dpNation(s1, s2, N){
        
            let newS1 = [];
            let newS2 = [];

            while(s2.length > 0){
                if(s1[0] == s2[0]){
                    newS1.push(s1[0]);
                    newS2.push(s2[0]);
                    s1.shift();
                    s2.shift();
                }else{
                    s2.shift();
                }
            }

            if(N == newS1.length && newS1.join("") == newS2.join("")){
                console.log("YES");
            }else{
                console.log("NO");
            }
        
        }

   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
abc
adbce
ax
xaa`);
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
      process.exit(0) ;
    });
  }