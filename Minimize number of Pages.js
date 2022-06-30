// Let's talk about Shinchan's childhood

// He had two types of notebooks, when he was a kid.

// * 10 problems could be solved in one page, in the first notebook.

// * 12 problems could be solved in one page, in the second notebook.

// Shinchan remembered how in order to maintain symmetry, if he was given with n problems in total to solve, he tore out pages from both notebooks, so no space was wasted. EVER!

// Given n number of questions, print the minimum number of pages he needs to tear out from the combination of both the notebooks, so that no space is wasted.

function runProgram(input){
    var input=input.split("\n");
    var tc=input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n= +input[line++];
        console.log(notebook(n));
    }
    
    
}
function notebook(n){
    if(n<0){
        return -1;
    }
    if(n==0){
        return 0;
    }
    var a=notebook(n-10);
    var b=notebook(n-12);
    if(a!=-1 && b!=-1){
        return Math.min(1+a,1+b);
    }
    else if(a==-1 && b==-1){
        return -1;
    }
    else if(b==-1){
        return 1+a
    }
    else if(a==-1){
        return 1+b;
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