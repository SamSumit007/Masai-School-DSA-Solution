//first K Multiples of X and then if it is divisible by Y then add this

var sum=0;
for(var i=1;i<=K;i++)
{
    if((X*i)%Y==0)
    {
        sum+=X*i;
    }
}
console.log(sum);