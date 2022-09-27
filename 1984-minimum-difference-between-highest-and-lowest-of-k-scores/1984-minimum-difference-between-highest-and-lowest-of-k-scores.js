/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b)=>a-b);
    if (k===1){
        return 0;
    }
    let n = nums.length;
    let res = Infinity;
    for(let i=0; i<=n-k; i++) {
        res = Math.min(res, nums[i+k-1]-nums[i]);
    }
    return res;
};