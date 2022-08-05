/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr=[];
    let sum=0;
    for (let i = 0; i<accounts.length; i++){
        let sum = accounts[i].reduce((a,b) => (a+b));
        arr[i] = sum;
    }
    return Math.max(...arr);
};