/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let arr = [...moves];
    let ans = [0, 0];
    for (i of arr) {
        if (i == 'R') {
            ans[1]++;
        } else if (i == 'L') {
            ans[1]--;
        } else if (i == 'U') {
            ans[0]++;
        } else {
            ans[0]--;
        }
    }
    if (ans[0] == 0 && ans[1] == 0) {
        return true;
    } return false;
};