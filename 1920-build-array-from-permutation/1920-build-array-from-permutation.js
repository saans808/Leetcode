/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];
    for (j of nums) {   
        ans.push(nums[j]);
    }
    return ans;
};