export function BinarySearchTree() {
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    function inOrderTraverseNode(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    function preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    function postOrderTraverseNode(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    function minNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    function maxNode(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    function searchNode(node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    }

    function findMinNode(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    function removeNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }

    let root = null;

    this.insert = function (key) {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    }

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    }

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    }

    this.min = function () {
        return minNode(root);
    }

    this.max = function () {
        return maxNode(root);
    }


    this.search = function (key) {
        return searchNode(root, key);
    }

    this.remove = function (key) {
        root = removeNode(root, key);
    }
}

function AvlTree() {
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }


    function insertNode(node, element) {
        if (node === null) {
            node = new Node(element);
        } else if (element < node.key) {
            node.left = insertNode(node.left, element);

            if (node.left !== null) {
                // 平衡判断
                if (heightNode(node.left) - heightNode(node.right) > 1) {
                    // 旋转
                    if (element < node.left.key) {
                        node = rotationLL(node);
                    } else {
                        node = rotationLR(node);
                    }
                }
            }
        } else if (element > node.key) {
            node.right = insertNode(node.right, element);

            if (node.right !== null) {
                // 平衡判断
                if (heightNode(node.right) - heightNode(node.left) > 1) {
                    // 旋转
                    if (element > node.right.key) {
                        node = rotationRR(node);
                    } else {
                        node = rotationRL(node);
                    }
                }
            }
        }
        return node;
    }

    function heightNode(node) {
        if (node === null) {
            return -1;
        } else {
            return Math.max(heightNode(node.left),
                heightNode(node.right)) + 1;
        }
    }

    function rotationRR(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    function rotationLL(node) {
        let temp = node.left;
        node.right = temp.right;
        temp.right = node;
        return temp;
    }

    function rotationLR(node) {
        node.left = rotationRR(node.left);
        return rotationLL(node);
    }

    function rotationRL(node) {
        node.right = rotationLL(node.right);
        return rotationRR(node);
    }
}