// A thief is stealing from a jewellery store and wants to steal the greatest value of gems possible. 
//However, the getaway car he brought with him can only fit a maximum weight ofC. 
//All the gems in the store have a value and a weight associated with them such that gem ihas a value v(i)and a weight w(i).

// Your task is to figure out the maximum valueVof gems he can steal given the weight limit of the car. 
//You can break a given gem into any fraction of itself.

// NOTE: Maximum value vshould be rounded to the nearest integer

// For example:

// Let Total Weight C = 50

// Number of gems = 3

// The Value of gems: 60 100 120

// The Weight of gems: 10 20 30

// The total value of the gems he can carry is = 240

// The fraction of each item taken is: 1 1 0.66666666666

// Total weight is : 1*10 + 1*20 + 0.66666666666*30 = 49.999999999799996

function runProgram(input){
    var input=input.split("\n");
    var c= +input[0];
    var n= +input[1];
    var value= input[2].trim().split(" ").map(Number);
    var weight=input[3].trim().split(" ").map(Number);
    solve(c,n,value,weight);
    
}
function solve(C,n,V,W){
    
    var profit=[];
    var j=0;
    for(var i=0;i<n;i++){
        profit.push((V[i]/W[j]));
        j++;
    }
    //console.log(profit)
    mergesort(profit,0,n-1,V,W);
    //console.log(profit,v,w)
    
    var MAX_VAL=0;
    
    for(var i=0;i<n;i++){

       if( W[i] <= C ){
         MAX_VAL = MAX_VAL + V[i]
         C = C - W[i]
       }
       else{
         MAX_VAL = MAX_VAL + V[i]*(C/W[i])   //MAX_VAL = MAX_VAL + C * profit[i];
         break
        }
    }
    
    console.log(Math.round(MAX_VAL));
}



function mergesort(arr,left,right,a,b)
    {
        if(left==right) //(left>=right)
        {
            return;
        }
        else
        {
            var mid=Math.floor((left+right)/2);
            mergesort(arr,left,mid,a,b);
            mergesort(arr,mid+1,right,a,b);
            merge(arr,left,right,mid,a,b);
            return;
        }
    }
    
    function merge(arr,left,right,mid,a,b)
    {
        var arr1=[];
        var arr2=[];
        for(var i=left;i<=mid;i++)
        {
            arr1.push(arr[i]);
        }
        for(var j=mid+1;j<=right;j++)
        {
            arr2.push(arr[j]);
        }
        
        var a1=[];
        var a2=[];
        for(var i=left;i<=mid;i++)
        {
            a1.push(a[i]);
        }
        for(var j=mid+1;j<=right;j++)
        {
            a2.push(a[j]);
        }
        
        var b1=[];
        var b2=[];
        for(var i=left;i<=mid;i++)
        {
            b1.push(b[i]);
        }
        for(var j=mid+1;j<=right;j++)
        {
            b2.push(b[j]);
        }
        
        var cur=left;
        var l=0;
        var r=0;
        while(l<arr1.length&&r<arr2.length)
        {
            if(arr1[l]>=arr2[r])
            {
                arr[cur]=arr1[l];
                a[cur]=a1[l];
                b[cur]=b1[l];
                l++;
                cur++;
            }
            else
            {
                arr[cur]=arr2[r];
                a[cur]=a2[r];
                b[cur]=b2[r];
                r++;
                cur++;
            }
        }
        while(l<arr1.length)
        {
            arr[cur]=arr1[l];
            a[cur]=a1[l];
            b[cur]=b1[l];
            l++;
            cur++;
        }
        while(r<arr2.length)
        {
            arr[cur]=arr2[r];
            a[cur]=a2[r];
            b[cur]=b2[r];
            r++;
            cur++;
        }
        return;
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