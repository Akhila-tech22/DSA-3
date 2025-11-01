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
    
    delete(data) {
        if(this.heap.length ===0) return null;
        if(this.heap.length ===1) return this.heap.pop();
        
        let max = this.heap[0]
        this.heap[0] = this.heap.pop();
         this.heapyDown();
        return max;
       
    }
    heapyDown() {
        let largest = 0;
        let n = this.heap.length;
        
        while(true) {
            let index = largest;
            let left = (index *2) +1;
            let right = (index *2) +2;
            
            if(left < n && this.heap[left] > this.heap[index]) index = left;
            if(right < n && this.heap[right] > this.heap[index]) index = right;
            
            if(index !== largest) {
                [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]
                largest = index;
            } else break;
        }
    }
}

const h = new Heap();
h.insert(10)
h.insert(25)
h.insert(14)
h.insert(12)
console.log(h.delete(14))
console.log(h.heap)
