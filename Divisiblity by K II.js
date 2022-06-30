// num , K is given
// find all numbers from 1 till N which is Divisible by K
// also do sum of all divisoble Numbers
var sum=0;
for(var i=1;i<=Number;i++)
{
    if(i%K==0)
    {
        sum+=i;
    }
}
console.log(sum);