// N=5
//* * * * *
//*
//*
//*
//*
// till N

for(var i=1;i<=N;i++)
{
    var bag="";
    if(i==1)
    {
        for(var j=1;j<=N;j++)
        {
            bag+="*"+" ";
        }
    }
    else
    {
        bag+="*";
    }
    console.log(bag);
}