class TrieNode {
    constructor() {
        this.child = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        
        for(const char of word) {
            if(!node.child[char]) {
                node.child[char] = new TrieNode();
             }
             node = node.child[char]
        }
        node.end = true;
    }
    
    display(node = this.root, res = "") {
        if(node.end) console.log(res)
        for(const c in node.child) {
            this.display(node.child[c], res + c)
        }
    }
}

const t = new Trie()
t.insert("cat")
t.insert("car")
t.insert("dog")
t.display()
