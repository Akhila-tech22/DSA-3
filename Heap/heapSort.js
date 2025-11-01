function heapSort(arr) {
    let n = arr.length;
    
    for(let i = Math.floor(n/2)-1; i>=0; i--) {
        heapy(arr, n, i)
    }
    
    for(let end = n-1; end>=0; end--) {
        [arr[0] , arr[end]] = [arr[end], arr[0]]
        heapy(arr, end, 0)
    }
}

function heapy(arr, n, i) {
    let index = i;
    
    let left = (index*2)+1;
    let right = (index *2)+2;
    
    if(left < n && arr[left] > arr[index]) index = left;
    if(right < n && arr[right] > arr[index]) index = right;
    
    if(index !== i) {
        [arr[i], arr[index]] = [arr[index], arr[i]]
        heapy(arr, n, index)
    }
}

let arr = [7,4,8,9,3,1,6]
heapSort(arr)
console.log(arr)
