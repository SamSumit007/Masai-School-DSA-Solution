// The University of Transylvania is conducting the coding fest for the Computer Programmers of the state. Again, because of his extraordinary managerial skills, Dracula is given the task to make arrangements for the competition.

// Dracula came to know that N people, are going to participate in the fest, and so he has the job of arranging them on N places for the fest. He gave an ID from 1 to N to each participant, and formulated a strategy to prevent plagiarism.

// He decided that all such permutations, in which the sum of IDs of participants, between two specific positions, L and R(L and R inclusive), are odd, need to be rejected. Find the total number of permutations, that will have to be rejected, according to Dracula’s strategy.

function runProgram(input){
    var input=input.split("\n");
    var N= +input[0];
    var arr=[];
    for(var i=1;i<=N;i++){
        arr.push(i);
    }
    var array= input[1].trim().split(" ").map(Number);
    var l=array[0];
    var r=array[1];
    solve(N,arr,l,r);
    
}
function solve(N,arr,l,r)
{
    // console.log(N,arr,l,r)
    var  count=0;
    // var array=[];
    function permutation(arr,current)
    {
        if(current==N)
        {
            var bag=arr.slice();
            if(check(l,r,bag)){
                count++;
            }
            return;
        }
        else
        {
            for(var i=current;i<N;i++)
            {
                swap(arr,i,current);
                permutation(arr,current+1);
                swap(arr,i,current);
            }
        }
    }
    permutation(arr,0);
    
   
    console.log(count);
    
}
function swap (array,a,b)
{
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function check(l,r,arr){
    var sum=0;
    for(var j=l;j<=r;j++){
        sum+=arr[j];
    }
    if(sum%2!=0){
       return true;
    }
    else{
        return false;
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