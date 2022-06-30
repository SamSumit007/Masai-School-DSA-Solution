/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (array) {
    var arr1 = [];
    for (var i = 0; i < array.length - 1; i++) {
        arr1.push(array[i]);
    }

    var arr2 = [];
    for (var i = 1; i < array.length; i++) {
        arr2.push(array[i]);
    }


    // console.log(arr1,arr2);
    if (array.length == 1) {
        return array[0];
    }
    if (array.length == 0) {
        return 0;
    }


    var ans = Math.max(helper(arr1), helper(arr2));
    return ans;

    function helper(house) {
        var dp = new Array(house.length).fill(-1);

        function robHouse(array, index) {
            if (index >= array.length) {
                return 0;
            }
            if (dp[index] != -1) {
                return dp[index];
            }

            var steal = array[index] + robHouse(array, index + 2);
            var noSteal = robHouse(array, index + 1);
            dp[index] = Math.max(steal, noSteal);
            return dp[index];
        }

        var robValue = robHouse(house, 0);
        return robValue;
    }

};


