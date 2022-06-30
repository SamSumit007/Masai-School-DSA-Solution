/*You need to implement a queue data structure with a list using plain list methods. 
You can only use list.append() and list.pop() methods in this question.*/

function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    var q=[];
    for(i=0;i<tc;i++){
        var ab=input[line].trim().split(" ");
        line++;
        if(ab[0]=="E"){
            q.push(+ab[1]);
        }
        if(ab[0]=="D"){
            if(q.length==0){
                console.log("Empty")
            }
            else{
                console.log(q[0]);
                var q1=[];
                for(var j=1;j<q.length;j++){
                    q1.push(q[j]);
                }
                q=q1;
            }
        }
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