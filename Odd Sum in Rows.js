for(var i=0;i<arr.length;i++)
{
    var sum=0;
    for(var j=0;j<arr.length;j++)
    {
        if(arr[i][j]%2!=0)
        {
            sum+=arr[i][j];
        }
    }
    console.log(sum);
}