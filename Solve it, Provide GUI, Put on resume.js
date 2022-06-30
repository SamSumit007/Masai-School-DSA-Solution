// solve 9*9 sudoku

function runProgram(input){
    input=input.trim().split("\n");
    var board=[];
    for(var i=0;i<input.length;i++)
    {
        board.push(input[i].trim().split(" ").map(Number));
    }
    
    solve1(board,0,0);
    if(!flag)
    {
        console.log(-1);
    }
}

var flag=false;

function solve1(board,i,j){
  if(i==board.length){
    flag=true;
    console.log(board.join("\n"));
    return;
  }
  var next_i=0;
  var next_j=0;
  if(j==board.length-1){
    next_i=i+1;
    next_j=0;
  }
  else{
    next_i=i;
    next_j=j+1;
  }
  if(board[i][j]!=0){
    solve1(board,next_i,next_j);
  }
  else{
    for(var val=1;val<=9;val++){
      if(isValid(board,i,j,val)){
        board[i][j]=val;
        solve1(board,next_i,next_j);
        board[i][j]=0;
      }
    }
    //return;
  }
}

function isValid(board,x,y,val)
{
    for(var j=0;j<board.length;j++)
    {
        if(board[x][j]==val)
        {
            return false;
        }
    }
    for(var i=0;i<board.length;i++)
    {
        if(board[i][y]==val)
        {
            return false;
        }
    }
    var subi=Math.floor(x/3)*3;
    var subj=Math.floor(y/3)*3;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            if(board[subi+i][subj+j]==val)
            {
                return false;
            }
        }
    }
    return true;
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