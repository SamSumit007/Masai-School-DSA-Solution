var unit=0;
N-=80;
if(N>=650)
{
    unit=150+(N-650)/10;
}
else if(N>=150)
{
    unit=50+(N-150)/5;
}
else if(N>0&&N<150)
{
    unit=N/3;
}
else if(N==0)
{
    unit=0;
}
console.log(unit);