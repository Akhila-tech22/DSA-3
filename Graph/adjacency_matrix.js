class Graph{
    constructor(vertex) {
        this.vertex = vertex;
        this.matrix = [];
        
        
        for(let i = 0; i<this.vertex.length;i++) {
            this.matrix[i] = [];
            for(let d =0; d<this.vertex.length;d++) {
                this.matrix[i][d] = 0;
            }
        }
    }
    
    addEdages(v1,v2) {
        let i = this.vertex.indexOf(v1);
        let j = this.vertex.indexOf(v2);
        
        this.matrix[i][j] = 1;
        this.matrix[j][i] = 1;
    }
    
    display() {
        
        console.log(this.vertex.join(" "))
        for(let i =0; i<this.vertex.length;i++) {
            console.log(this.vertex[i] + "" + this.matrix[i].join(" "))
        }
    }
}

let vertex = ['A','B','C','D'];
const g = new Graph(vertex);
g.addEdages("A", "B")
g.addEdages("A", "C")
g.addEdages("D", "B")

g.display()
