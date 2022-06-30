//Any string which have half of the characters vowels make him feel good. You are given a string of length N, where N is an even number. 
//If the number of vowels in the string, are more than or equal to N/2, print "Feel good!", else print "Feel bad!". 
//(All the letters in the string are in lower case)

var count = 0;
for (i = 0; i < N; i++) 
{
    if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") 
    {
        count++;
    }
}
if (count >= N / 2) 
{
    console.log("Feel good!");
}
else 
{
    console.log("Feel bad!");
}