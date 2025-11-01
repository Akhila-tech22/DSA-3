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
    
   search(word) {
       let node = this.root;
        for(const char of word) {
            if(!node.child[char]) return [];
            node = node.child[char];
        }
        let res = [];
       
       function call(node,word) {
           if(node.end)  res.push(word) 
           
           for(const c in node.child) {
               call(node.child[c], word + c)
           }
           
       }
       call(node, word)
       return res;
   }
}

const t = new Trie()
t.insert("cat")
t.insert("car")
t.insert("caatingg")
console.log(t.search("d"))
