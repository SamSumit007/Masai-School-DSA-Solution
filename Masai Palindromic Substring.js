//longest possible substring that is palindromic

var count=0;
for(var i=0;i<str.length;i++)
{
    for(var j=i;j<str.length;j++)
    {
        var substr="";
        var revsub="";
        for(var k=i;k<=j;k++)
        {
            substr+=str[k];
        }
        for(var a=substr.length-1;a>=0;a++)
        {
            revsub+=substr[a];
        }
        if(substr=revsub)
        {
            if(substr.length>count)
            {
                count=substr.length;
            }
        }
    }
}
console.log(count);