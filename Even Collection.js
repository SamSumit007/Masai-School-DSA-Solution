//[min,max] including min and max sum of all even numbers

var sum=0;
for(var i=min;i<=max;i++)
{
    if(i%2==0)
    {
        sum+=i;
    }
}
console.log(sum);