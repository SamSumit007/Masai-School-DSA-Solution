// Function for printing rank list along with names

var names=[];
var marks=[];
// N is length of these arrays

function ranklist(name,marks,N)
{
    var previous =-1;
    var rank=1;
    var count=0;
    for(var i=0;i<N;i++)
    {
        if(marks[i]==previous)
        {
            console.log(rank,names[i]);
        }
        else
        {
            rank+=count;
            console.log(rank.names[i]);
            count=0;
        }
        count++;
        previous=marks[i];
    }
}
