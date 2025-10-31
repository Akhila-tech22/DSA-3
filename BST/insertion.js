class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    insert(data) {
        let newNode = new Node(data);
        if(!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        
        while(true) {
            if(data === current.data) return;
            if(data < current.data) {
                if(!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if(!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    inOrder() {
        let res = [];
        function call(node) {
            if(!node) return;
            call(node.left);
            res.push(node.data);
            call(node.right);
        }
        call(this.root);
        return res;
    }

    preOrder() {
        let result = [];
        function traverse(node) {
            if (!node) return;
            result.push(node.data);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    postOrder() {
        let result = [];
        function traverse(node) {
            if (!node) return;
            traverse(node.left);
            traverse(node.right);
            result.push(node.data);
        }
        traverse(this.root);
        return result;
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);

console.log("InOrder:", tree.inOrder());      // [5, 10, 12, 15]
console.log("PreOrder:", tree.preOrder());    // [10, 5, 15, 12]
console.log("PostOrder:", tree.postOrder());  // [5, 12, 15, 10]
