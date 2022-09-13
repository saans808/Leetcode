/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxInt = Math.max(...nums);
    let minIntMustBe = maxInt /2;
    let intFound = nums.find(n => n!==maxInt && n>minIntMustBe);
    return intFound ? -1 : nums.indexOf(maxInt);
 
};