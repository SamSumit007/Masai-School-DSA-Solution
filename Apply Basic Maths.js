//A is array N is lenght of array
//remove one char which is smallest and then the sum of array is divisible by 7

var index=-1;
var d=0;
var sum=0;
for(i=0;i<N;i++)
{
    sum=sum+A[i];
}
for(j=0;j<A.length;j++)
{
    if((sum-A[j])%7==0)
    {
        if(A[j]<d||index==-1)
        {
            d=A[j];
            index=j;
        }
    }
}
console.log(index);