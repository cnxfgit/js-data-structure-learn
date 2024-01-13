function sequentialSearch(array, item) {
    let cost = 0;
    for (let i = 0; i < array.length; i++) {
        cost++;
        if (item === array[i]) { //{1}
            return i;
        }
    }
    console.log('cost for sequentialSearch with input size ' +
        array.length + ' is ' + cost);
    return -1;
}

function swap(array, index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

function bubbleSort_(array) {
    let length = array.length;
    let cost = 0;
    for (let i = 0; i < length; i++) {
        cost++;
        for (let j = 0; j < length - 1; j++) {
            cost++;
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    console.log('cost for bubbleSort with input size' +
        ' ' + length + 'is ' + cost);
}