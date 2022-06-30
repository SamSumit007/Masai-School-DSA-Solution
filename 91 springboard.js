// The floor of 91 springboard is covered by h × w square tiles, where there are h rows of tiles from front (first row) to back (last row) and w columns of tiles from left to right. Each tile has value of 1 to 100 written on it.

// You have to walk on tiles such that sum of numbers is as high as possible, subject to the following restrictions:

// You start by choosing any tile in the first row, and collects the value on that tile. Then, you move to a tile in the next row, collects the value on the tile, and so on until you reach the last row.

// When you move from one tile to a tile in the next row, you can only move to the tile just below it or diagonally to the left or right.

// Given the values of h and w, and the value on each tile, write a program to compute the maximum possible sum you can grab in one single trip from the first row to the last row.


function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var [row,col]=input[line++].split(" ").map(Number);
        var board=[];
        for(var j=0;j<row;j++){
            var arr=input[line++].split(" ").map(Number);
            board.push(arr);
            
        }
        solve(row,col,board);
    }
    
    
    
}

function solve(row,col,board){
    
    // console.log(row,col,board)
    var result=board[0];
    for(var i=1;i<row;i++){
        temp=[];
        for(var j=0;j<col;j++){
            if(j==0){
                temp.push(board[i][j]+Math.max(result[j],result[1]));
            }
            else if(j==col-1){
                temp.push(board[i][j]+Math.max(result[j],result[j-1]));
            }
            else{
                temp.push(board[i][j]+Math.max(result[j],result[j-1],result[j+1]));
            }
            
        }
        result=temp;
    }
    var max=0;
    for(var i=0;i<result.length;i++){
        max=Math.max(max,result[i]);
    }
    console.log(max);
    
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