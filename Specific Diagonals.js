// R,C,arr,K
//1 2 3
//4 5 6
//7 8 9
//if K=6 then output 2 6 and 6 8 in next line

var kr=0;
var kc=0;
for(var i=0;i<R;i++)
{
    for(var j=0;j<C;j++)
    {
        if(arr[i][j]==K)
        {
            kr=i;
            kc=j;
        }
    }
}
var sum =kr+kc;
var sub=kr-kc;
var bag1=""; // primary diagonal
var bag2=""; // secondary diagonal
for(var k=0;k<R;k++)
{
    for(var l=0;l<C;l++)
    {
        if(sub==k-l)
        {
            bag1+=arr[k][l]+" ";
        }
    }
    for(var m=0;m<C;m++)
    {
        if(sum=k+m)
        {
            bag2+=arr[k][m]+" ";
        }
    }
}

console.log(bag1);
console.log(bag2);