/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let answer = [...nums, ...nums];
    return answer;
};