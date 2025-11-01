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
    
    largest(i = 0) {
        if(i >= this.heap.length) return 0;
        
        let left = (i *2)+1;
        let right = (i *2) +2;
        let leftSum = this.largest(left)
        let rightSum = this.largest(right)
        
        return Math.max(leftSum , rightSum) + this.heap[i]
    }

}

const h = new Heap();
h.insert(10)
h.insert(25)
h.insert(14)
h.insert(12)
console.log(h.largest())
