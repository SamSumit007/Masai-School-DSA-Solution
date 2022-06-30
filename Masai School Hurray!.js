//check number 1 to N if divisible by 7 and 5 both then masai school 
//if divisible by 7 then masai if divisible by 5 then school else hurray!

for(var i=1;i<=N;i++)
{
    if(i%35==0)
    {
        console.log("Masai School");
    }
    else if(i%7==0)
    {
        console.log("Masai");
    }
    else if(i%5==0)
    {
        console.log("School");
    }
    else
    {
        console.log("Hurray!");
    }
}
