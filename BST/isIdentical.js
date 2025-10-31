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
    isIdentical(node1, node2) {
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        if(node1.data !== node2.data) return false;
        return this.isIdentical(node1.left , node2.left)&&
        this.isIdentical(node1.right , node2.right);
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);

const tree2 = new BST();
tree2.insert(10);
tree2.insert(5);
tree2.insert(15);
tree2.insert(12);

console.log(tree.isIdentical(tree.root, tree2.root))

