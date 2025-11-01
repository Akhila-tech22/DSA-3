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
    
   deletion(word) {
       this.deleteNode(this.root, word,0)
   }
   deleteNode(node, word, i) {
       if(i === word.length) {
       node.end = false;
       return Object.keys(node.child).length ===0;
       }
       
       let char = word[i];
       if(!node.child[char]) return 
       
       let should = this.deleteNode(node.child[char], word, i+1);
       if(should) {
           delete node.child[char];
       }
       return Object.keys(node.child).length ===0 && !node.end;
   }
   
}

const t = new Trie()
t.insert("cat")
t.insert("car")
t.insert("caatingg")
t.deletion("car")
t.display()
