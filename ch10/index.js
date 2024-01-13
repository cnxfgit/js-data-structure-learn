function ArrayList() {
    let array = [];

    this.insert = function (item) {
        array.push(item);
    }

    this.toString = function () {
        return array.join();
    }

    function swap(array, index1, index2) {
        console.log(index1, index2)
        let aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }

    this.bubbleSort = function () {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
    }

    this.modifiedBubbleSort = function () {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) { //{1}
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
    }

    this.selectionSort = function () {
        let length = array.length,
            indexMin;
        for (let i = 0; i < length - 1; i++) {
            indexMin = i
            for (let j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                swap(array, i, indexMin);
            }
        }
    }

    this.insertionSort = function () {
        let length = array.length,
            j, temp;
        for (let i = 1; i < length; i++) {
            j = i;
            temp = array[i];
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
        }
    };

    function merge(left, right) {
        let result = [],
            il = 0,
            ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }
        while (il < left.length) {
            result.push(left[il++]);
        }
        while (ir < right.length) {
            result.push(right[ir++]);
        }
        return result;
    }

    let mergeSortRec = function (array) {
        let length = array.length;
        if (length === 1) {
            return array;
        }
        let mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);
        return merge(mergeSortRec(left), mergeSortRec(right));
    };

    this.mergeSort = function () {
        array = mergeSortRec(array);
    };


    function partition(array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i; //{16}
    }

    function quick(array, left, right) {
        let index;
        if (array.length > 1) {
            index = partition(array, left, right);
            if (left < index - 1) {
                quick(array, left, index - 1);
            }
            if (index < right) {
                quick(array, index, right);
            }
        }
    }

    this.quickSort = function () {
        quick(array, 0, array.length - 1);
    };

    function buildHeap(array) {
        let heapSize = array.length;
        for (let i = Math.floor(array.length / 2);
             i >= 0; i--) {
            heapify(array, heapSize, i);
        }
    }

    function heapify(array, heapSize, i) {
        let left = i * 2 + 1,
            right = i * 2 + 2,
            largest = i;
        if (left < heapSize && array[left] > array[largest]) {
            largest = left;
        }
        if (right < heapSize && array[right] > array[largest]) {
            largest = right;
        }
        if (largest !== i) {
            swap(array, i, largest);
            heapify(array, heapSize, largest);
        }
    }

    this.heapSort = function () {
        let heapSize = array.length;
        buildHeap(array); //{1}
        while (heapSize > 1) {
            heapSize--;
            swap(array, 0, heapSize); //{2}
            heapify(array, heapSize, 0); //{3}
        }
    };
}


function createNonSortedArray(size) {
    let array = new ArrayList();
    for (let i = size; i > 0; i--) {
        array.insert(i);
    }
    return array;
}


let array = createNonSortedArray(5);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());

array = createNonSortedArray(5);
console.log(array.toString());
array.modifiedBubbleSort();
console.log(array.toString());

array = createNonSortedArray(5);
console.log(array.toString());
array.selectionSort();
console.log(array.toString());

array = createNonSortedArray(5);
console.log(array.toString());
array.insertionSort();
console.log(array.toString());

array = createNonSortedArray(5);
console.log(array.toString());
array.mergeSort();
console.log(array.toString());


array = createNonSortedArray(5);
console.log(array.toString());
array.quickSort();
console.log(array.toString());

array = createNonSortedArray(5);
console.log(array.toString());
array.heapSort();
console.log(array.toString());