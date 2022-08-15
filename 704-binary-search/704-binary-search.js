/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== target){
            count++
        } else return count
    }
    return -1
};