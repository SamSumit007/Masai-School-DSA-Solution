// A Transformation in education == education in Transformation A //str is given

var str="A Transformation in education"
//by inbuilt method
var s=str.trim().split(" ");
var newstr="";
for(var i=s.length-1;i>=0;i--)
{
   newstr+=s[i]+" ";
}
console.log(newstr);

//by without inbuilt method
var revstr1="";
for(var j=str.length-1;j>=0;j--)
{
    revstr1+=str[j];
}
var newstr="";
var p=0;
for(var m=0;m<revstr1.length;m++)
{
    if(revstr1[m]==" ")
    {
        for(var a=m-1;a>=p;a--)
        {
            newstr+=revstr1[a];
        }
        newstr+=" ";
        p=m+1;
    }
    else if(m==revstr1.length-1)
    {
        newstr+=revstr1[m];
    }
}
console.log(newstr);