//find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime
//A is array and N is Length of array

var sum = 0;
for (i = 0; i < N; i++) 
{
    for (j = i; j < N; j++) 
    {
        if (i < j) 
        {
            var prime = (j - i);
            count = 0;
            for (k = 1; k <= prime; k++) 
            {
                if (prime % k == 0) 
                {
                    count++;
                }
            }
            if (count == 2) 
            {
                var s = A[j] - A[i];
                if (s < 0) 
                {
                    sum = sum + (s * (-1));
                }
                else 
                {
                    sum = sum + s;
                }
            }
        }
    }
}
console.log(sum);