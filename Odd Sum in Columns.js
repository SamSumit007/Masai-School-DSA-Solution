//N=row M=column arr given
for(var i=0;i<M;i++)
{
    var sum=0;
    for(var j=0;j<N;j++)
    {
        if(arr[j][i]%2!=0)
        {
            sum+=arr[j][i];
        }
    }
    console.log(sum);
}