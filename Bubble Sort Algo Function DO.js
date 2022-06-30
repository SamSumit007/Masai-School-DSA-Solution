// // Function for sorting array by bubble sort algorithm
// Decending Order 

function sort(array,N)
{
    // N Length of array
    for(var i=0;i<N-1;i++)
    {
        for(var j=0;j<N-i-1;j++)
        {
            if(array[j]<array[j+1])
            {
                swap(array,j,j+1);
            }
        }
    } 
}

function swap (array,a,b)
{
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}