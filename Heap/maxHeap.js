class Heap {
    constructor() {
        this.heap = [];
    }
    
    insert(data) {
        this.heap.push(data);
        this.heapyUp();
    }
    
    heapyUp() {
        let index = this.heap.length-1;
        
        while(index > 0) {
            let parent = Math.floor((index -1)/2);
            
            if(this.heap[index] > this.heap[parent]) {
                [this.heap[index] , this.heap[parent]] = 
                [this.heap[parent], this.heap[index]]
                index = parent;
            } else break;
        }
    }
}

const h = new Heap();
h.insert(10)
h.insert(25)
h.insert(14)
h.insert(12)
console.log(h.heap)
