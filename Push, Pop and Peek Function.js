// array is given in Question
// data which we want in stack

var top = -1;

function push(data,arr)
{
    if(top==arr.length-1)
    {
        return overflow;
    }
    else
    {
        top++;
        arr[top]=data
    }
}

function pop(arr)
{
    if(top==-1)
    {
        return underflow;
    }
    else
    {
        var ans=arr[top];
        top--;
        return ans;
    }
}

function peek(arr)
{
    return arr[top];
}