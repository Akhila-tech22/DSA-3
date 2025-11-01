class Graph{
    constructor() {
        this.list = {};
        
    }
    
    addVertex(v) {
        if(!this.list[v]) this.list[v] = [];
    }
    addEdages(v1,v2) {
        if(!this.list[v1]) this.addVertex(v1);
        if(!this.list[v2]) this.addVertex(v2);
        
        this.list[v1].push(v2);
        this.list[v2].push(v1)
    }
    
dfs(start, visited = new Set()) {
    visited.add(start)
    console.log(start)
    for(const char of this.list[start]) {
        if(!visited.has(char)) {
            visited.add(char);
            this.dfs(char, visited);
        }
    }
} 
}

const g = new Graph();
g.addEdages("A", "B")
g.addEdages("A", "C")
g.addEdages("D", "B")
g.addEdages("E", "D")

console.log("BFS starting from A");
g.dfs("A")
