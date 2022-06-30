//* * * * *
//*
//*****
//*
//* * * * *    N==5
//Till N

for (i = 1; i <= N; i++) 
{
    var bag = "";
    for (j = 1; j <= N; j++) 
    {
        if (i == 1) {
            bag = bag + "*" + " ";
        }
        else if (i == (N + 1) / 2) 
        {
            bag = bag + "*";
        }
        else if (i == N) 
        {
            bag = bag + "*" + " ";
        }
        else if (j == 1) 
        {
            bag = bag + "*";
        }
    }
    console.log(bag);
}