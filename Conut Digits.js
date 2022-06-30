//You are given an array, stored in a variable with the sizearr
//The size of the array is stored in a variable with the namen
//You have to find the count of 0's ,1's and 2's

    var z =0;
    var o=0;
    var t=0;
    for(i=0;i<N;i++)
    {
        if(arr[i]==0)
        {
            z++;
        }
        if(arr[i]==1)
        {
            o++
        }
        if(arr[i]==2)
        {
            t++;
        }
    }
    console.log(z,o,t);