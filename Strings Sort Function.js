// Function for sorting Strings
var array = [] // Array that store Strings
function SwapOrNot(StringA, StringB)
{
    var len=Math.min(StringA.length,StringB.length);
    for(var i=0;i<len;i++)
    {
        if(StringA[i] != StringB[i])
        {
            if(StringA[i] > StringB[i])
            {
                return true; // means swap
            }
            else
            {
                return false;
            }
        }
    }
    return false;
}

function swap (array,a,b)
{
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function SortNames (array,N)
{
    for(var i=0;i<N-1;i++)
    {
        for(var j=0;j<N-i-1;j++)
        {
            if(SwapOrNot(array[j],array[j+1])==true)
            {
                swap(array,array[j],array[j+1]);
            }
        }
    }
}