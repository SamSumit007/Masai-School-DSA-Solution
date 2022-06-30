var x={};
for(var i=0;i<N;i++)
{
    if(x[arr[i]]==undefined)
    {
        x[arr[i]]=1;
    }
    else
    {
        x[arr[i]]=x[arr[i]]+1;
    }
}
var a=0;
var b=0;
for(var key in x)
{
    if(x[key]>b)
    {
        b=x[key];
        a=key;
    }
}
console.log(a+"-"+b);