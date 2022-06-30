var output=[];
for(var i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        output.push(arr[i+1]);
    }
    else
    {
        output.push(arr[i-1]);
    }
}
console.log(output);