// sum of even number between [1 to i] then [1 to i+1] like this till N

for(var i=1;i<=N;i++)
{
    var sum=0;
    for(var j=1;j<=N;j++)
    {
        if(j%2==0)
        {
            sum+=j;
        }
    }
    console.log(sum);
}