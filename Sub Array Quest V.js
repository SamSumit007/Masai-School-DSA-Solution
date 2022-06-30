//Given an array A with N positive integers. 
//Count the number of subarrays of length greater than 1, such that the sum of the start and end elements of the subarray is odd.

var count = 0;
for (i = 0; i < N; i++) 
{
    for (j = i; j < N; j++) 
    {
        var temp = [];
        for (k = i; k <= j; k++) 
        {
            temp.push(A[k]);
        }
        if (temp.length > 1 && (temp[0] + temp[temp.length - 1]) % 2 != 0) 
        {
            count++;
        }
    }

}
console.log(count);