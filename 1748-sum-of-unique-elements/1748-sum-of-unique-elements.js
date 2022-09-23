/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return set(nums).reduce((a,b) => a+b, 0)   
    };
   // let arr = [...new Set(nums)]; ??
  // let arr = Array.from(new Set(nums));
let set = function(nums) {
    return nums.filter(num => nums.filter(n=>n === num).length === 1)
}