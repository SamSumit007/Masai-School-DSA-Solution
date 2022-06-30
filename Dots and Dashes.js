//N=5 if line number is odd then "*" till N OR if odd then only "_"
//_
//* * * * *
//_
//* * * * *
//_
//till N
for(var i=1;i<=N;i++)
{
    var bag="";
    if(i&2==0)
    {
        for(var j=1;j<=N;j++)
        {
            bag+="*"+" ";
        }
    }
    else
    {
        bag+="_";
    }
    console.log(bag);
}
