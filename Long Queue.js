//There is a long queue of people in front of ATMs. Due to withdrawal limit per person per day, people come in groups to withdraw money.
//Groups come one by one and line up behind the already present queue. The groups have a strange way of arranging themselves.
//In a particular group, the group members arrange themselves in increasing order of their height(not necessarily strictly increasing).
//You are given a array representing heights of persons in queue. Since groups are standing behind each other, one cannot differentiate between different groups and the exact count cannot be given.
//Can you find the minimum number of groups that can be observed in the queue?

var count = 1;
for (i = 0; i < n; i++) 
{

    if (arr[i] > arr[i + 1]) 
    {
        count++;
    }

}
console.log(count);