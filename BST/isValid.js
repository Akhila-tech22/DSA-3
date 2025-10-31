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
    isValid(node = this.root, min = -Infinity, max = Infinity) {
        if(!node) return true;
        
        if(node.data <= min ||  node.data >= max) return false;
        return this.isValid(node.left, min , node.data) && this.isValid(node.right, node.data, max)
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);

console.log(tree.isValid());     

