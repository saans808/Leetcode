/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans = [];
    for (i in nums) {
        for (j in nums) {
            if (nums[i] + nums[j] == target && i<j) {
               ans[0]=i;
               ans[1]=j;
            }
            }
        }
    return ans;
};