// You are given two number A and B, and you have to make A equal to B, but you are only allowed to add either 2, or 1 to A. Find the minimum number of moves, in which you can convert A to B.

// Note:  B will always be greater than or equal to  A, initially.

function aToB(A,B){
    var count=0;
    
    while(A<B){
        if(A+2<=B){
            A+=2;
            count++;
        }
        else{
            A+=1;
            count++;
        }
    }
     console.log(count);
  }