/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    for (i in operations) {
        if (operations[i].includes('++')){
            X += 1
        } else { X -= 1}}
    return X;
};