//string is given

var rev="";
for(var i =str.length-1;i>=0;i--)
{
    rev+=str[i];
}
if(rev==str)
{
    console.log("Yes");
}
else
{
    console.log("No");
}



//another method
var a=str.length-1
var i=0;
var flag=true;
while(i<a)
{
    if(str[i]!=str[a])
    {
        flag=false;
    }
    i++;
    a--;
}
if(flag)
{
    console.log("Yes");
}
else
{
    console.log("No");
}