//if 42 is present in array then true

var flag=false;
for(var i=0;i<arr.length;i++)
{
    if(arr[i]==42)
    {
        flag=true;
        break;
    }
}
if(flag)
{
    console.log("true");
}
else
{
    console.log("false");
}