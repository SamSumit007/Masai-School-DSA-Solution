// start from 1 till  N;
var i=1;
var sum=0;
while(i<=N)
{
    if(i%2==0)
    {
        sum+=i;
    }
    i++;
}
console.log(sum);