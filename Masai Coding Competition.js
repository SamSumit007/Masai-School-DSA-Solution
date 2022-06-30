/*There is a coding Tournament where 4 clubs are going to compete. 
Since the team selection is very critical in this competition,Rohit asked Harshit to help him in the team selection process.

There is a long queue of students from four clubs. Each student of a club have a different roll number. 
Whenever a new student will come, he will search for his clubmate from the end of the queue. 
As soon as he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the end of the queue. 
At any moment Harshit will ask the student, who is standing in front of the queue, to come and give his name and Harshit will remove him from the queue. 
There are Q operations of one of the following types:

E a b: A new student of club a whose roll number is b will stand in queue according to the method mentioned above.

D: Harshit will ask the student, who is standing in front of the queue, to come and put his name and Harshit will remove him from the queue*/

function runProgram(input){
    var input=input.split("\n");
    var line=1;
    var tc= +input[0];
    var queue=[];
    var q1=[];
    var q2=[];
    var q3=[];
    var q4=[];
    for(var i=0;i<tc;i++){
        var ab=input[line].split(" ");
        var club= +ab[1];
        var roll= +ab[2];
        if(ab[0]=="E"){
            if(club==1){
                if(queue.length==0||!queue.includes(club)){
                    queue.push(club);
                    
                }
                q1.push(roll);
                //q1.sort();
            }
            else if(club==2){
                if(queue.length==0||!queue.includes(club)){
                    queue.push(club);
                    
                }
                q2.push(roll);
                //q2.sort();
            }
            else if(club==3){
                if(queue.length==0||!queue.includes(club)){
                    queue.push(club);
                    
                }
                q3.push(roll);
                //q3.sort();
            }
            else if(club==4){
                if(queue.length==0||!queue.includes(club)){
                    queue.push(club);
                   
                }
                q4.push(roll);
                //q4.sort();
            }
        }
        if(ab[0]=="D"){
            if(queue[0]==1){
                console.log(1,q1[0]);
                q1=abc(q1);
                if(q1.length==0){
                    queue=abc(queue);
                }
            }
            else if(queue[0]==2){
                console.log(2,q2[0]);
                q2=abc(q2);
                if(q2.length==0){
                    queue=abc(queue);
                }
            }
            else if(queue[0]==3){
                console.log(3,q3[0]);
                q3=abc(q3);
                if(q3.length==0){
                    queue=abc(queue);
                }
            }
            else if(queue[0]==4){
                console.log(4,q4[0]);
                q4=abc(q4);
                if(q4.length==0){
                    queue=abc(queue);
                }
            }
        }
        line++;
    }
    //console.log(queue)
}
function abc(arr){
    var ab=[];
    for(var i=1;i<arr.length;i++){
        ab.push(arr[i]);
    }
    return ab;
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