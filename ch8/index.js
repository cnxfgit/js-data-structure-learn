import {BinarySearchTree} from "./tree.js";

let tree = new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);


const printNode = function (value) {
    console.log(value);
}

tree.inOrderTraverse(printNode);
tree.preOrderTraverse(printNode);

console.log(tree.min());
console.log(tree.max());


console.log(tree.search(1));
console.log(tree.search(8));