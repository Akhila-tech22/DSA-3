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

    delete(data) {
        deleteNode(this.root, data)
        
        function deleteNode(node, data) {
            if(!node) return null;
            if(data < node.data) {
                node.left = deleteNode(node.left, data)
            }else if(data > node.data) {
                node.right = deleteNode(node.right, data)
            } else {
                if(!node.left && !node.right) return null;
                if(!node.left) return node.right;
                if(!node.right) return node.left;
                
                let find = findMin(node.right);
                node.data = find.data;
                node.right = deleteNode(node.right, data)
            }
            return node;
            
        }
        function find(node) {
            while(node.left) {
                node = node.left;
            }
            return node;
        }
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);
tree.delete(12)
console.log("InOrder:", tree.inOrder());      // [5, 10, 15]

