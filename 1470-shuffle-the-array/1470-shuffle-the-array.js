/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let nums1 = nums.slice(0, n);
    let nums2 = nums.slice(-n);
    let ans = [];
    for (let i =0; i<nums1.length; i++) {
        ans.push(nums1[i]);
        ans.push(nums2[i]);
    }
    return ans;
};