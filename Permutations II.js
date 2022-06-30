//Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

var permuteUnique = function (nums) {

    const result = [];
    const dfs = (i, nums) => {
        if (i == nums.length) {
            result.push(nums.slice());
            return;
        }
        let obj = {};
        for (let j = i; j < nums.length; j++) {
            if (obj[nums[j]]) continue;
            obj[nums[j]] = true;
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    dfs(0, nums);
    return result;

};