//a,b,c id given

if(a>b && a<c || a<b && a>c)
{
    console.log(a);
}
else if(b>a && b<c || b>c && b<a)
{
    console.log(b);
}
else if(c<a && c>b || c>a && c<b)
{
    console.log(c);
}