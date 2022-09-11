/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let cnd= command.split("()").join("o").split("(al)").join("al");
    return cnd;
};