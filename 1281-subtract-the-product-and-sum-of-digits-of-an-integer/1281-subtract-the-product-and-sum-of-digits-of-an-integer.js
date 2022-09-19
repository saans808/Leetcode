/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = Array.from(String(n), Number)
    let pro = arr.reduce((a,b) => a*b);
    let sum = arr.reduce((a,b) => a+b);
    return pro-sum;
};