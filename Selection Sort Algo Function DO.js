// Function for sorting array by selection sort algorithm
// Decending Order 

function sort(array,N)
{
    //N is lenght of array
    for(var i=0; i<N-1; i++)
    {
        var min=i;
        for(var j=i+1;j<N;j++)
        {
            if(array[min] < array[j])
            {
                min=j;
            }
        }
        swap(array,min,i);
    }
}

function swap (array,a,b)
{
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}