//if string contain @$&#* then strong password

var a="@#$&*";
var flag=false;
for(var i=0;i<str.length;i++)
{
    for(var j=0;j<a.length;j++)
    {
        if(str[i]==a[j])
        {
            flag=true;
            break;
        }
    }
}
if(flag)
{
    console.log("strong");
}
else
{
    console.log("weak");
}