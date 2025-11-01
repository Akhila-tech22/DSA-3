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
    
    bfs(start) {
        let visited = new Set();
        visited.add(start)
        let queue =[start]
        
        while(queue.length > 0) {
            let current = queue.shift();
            console.log(current)
            for(const char of this.list[current]) {
                if(!visited.has(char)) {
                    visited.add(char);
                    queue.push(char)
                }
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
g.bfs("A")   
