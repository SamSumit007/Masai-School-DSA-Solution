// 1 to Num if i divisible by 3 & 5 then print Fizz Buzz
// i divisible by 3 print fizz / by 5 print buzz else i as it is

for(var i=1;i<=Num;i++)
{
    if(i%15==0)
    {
        console.log("Fizz-Buzz");
    }
    else if(i%3)
    {
        console.log("Fizz");
    }
    else if(i%5)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}