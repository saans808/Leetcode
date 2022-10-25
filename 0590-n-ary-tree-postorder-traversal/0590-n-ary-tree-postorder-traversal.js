/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res =[];
    traverse(root);
    return res;
    
    function traverse(node) {
        if(!node) return;
        for(child of node.children) {
            traverse(child);
        }
        res.push(node.val);
    }
};