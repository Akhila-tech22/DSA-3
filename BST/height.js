class Node{
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
        while(current) {
            if(data === current.data) return;
            if(data < current.data) {
                if(!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }else {
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
            call(node.left)
            res.push(node.data)
            call(node.right)
        }
        call(this.root);
        return res;
    }
    
    height(node = this.root) {
        if(!node) return -1;
        let left = this.height(node.left);
        let right = this.height(node.right);
        
        return Math.max(left, right) +1;
    }
}

const t = new BST();
t.insert(15)
t.insert(10)
t.insert(20)
t.insert(25)

console.log(t.height())
