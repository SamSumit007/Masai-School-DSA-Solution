// start from Left till Right, K is given
// find all numbers from 1 till N which is Divisible by K
// count all divisible numbers

var count=0;
for(var i=Left;i<=Right;i++)
{
    if(i%K==0)
    {
        count++;
    }
}
console.log(count);