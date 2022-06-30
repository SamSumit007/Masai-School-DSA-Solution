//sum of all even numbers till N
var sum=0;
for(var i=0;i<=N;i+=2)
{
    sum+=i;
}
console.log(sum);

//another method
var sum=0;
for(var i=1;i<=N;i++)
{
    if(i%2==0)
    {
        sum+=i;
    }
}
console.log(sum);