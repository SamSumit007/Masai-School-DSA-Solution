for(var i=0;i<arr.length;i++)
{
    var count=0;
    var x = arr[i];
    for(var j=0;j<x.length;j++)
    {
        var y=x[j];
        if(y=="a"||y=="e"||y=="i"||y=="o"||y=="u")
        {
            count++;
        }
    }
    if(count>=1)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
}
