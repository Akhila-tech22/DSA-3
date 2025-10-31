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
    findMin(node = this.root) {
        if(!node.left) return node.data;
        return this.findMin(node.left)
    } 
    findMax(node = this.root) {
        if(!node.right) return node.data;
        return this.findMax(node.right) // note the point : Recursion modifies outer variable, no return needed
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);

console.log(tree.findMin());     
console.log(tree.findMax());

