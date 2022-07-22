// Maria plays college basketball and wants to go pro.Each season she maintains a record of her play.She tabulates the number of times she breaks her season record for most points and least points in a game.Points scored in the first game establish her record for the season, and she begins counting from there.

// Count
//     Game  Score  Minimum  Maximum   Min Max
// 0      12     12       12       0   0
// 1      24     12       24       0   1
// 2      10     10       24       1   1
// 3      24     10       24       1   1

// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// Function Description=>

// Complete the breakingRecords function in the editor below.

// breakingRecords has the following parameter(s):

// int scores[n]: points scored per game

// Returns=>

// int[2]: An array with the numbers of times she broke her records.Index 0 is for breaking most points records, and index 1 is for breaking least points records.

function breakingRecords(s) {
    // Write your code here

    var min = s[0];
    var max = s[0];
    var maxArr = [0];
    var minArr = [0];

    for(var i = 1; i < s.length; i++){
        if(max < s[i] ){
            max = s[i];
            maxArr.push(1);
            minArr.push(0);
        }else if(min > s[i]){
            min = s[i];
            minArr.push(1);
            maxArr.push(0);
        }else if( max == s[i] || min == s[i]){
            minArr.push(1);
            maxArr.push(1);
        }

    }

    console.log(maxArr);
    console.log(minArr);

}
breakingRecords([12,24,10,24])