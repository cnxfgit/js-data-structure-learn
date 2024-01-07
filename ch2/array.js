//  create
var daysOfWeek = [];
var daysOfWeek = new Array();
var daysOfWeek = new Array(7);
var daysOfWeek = new Array('Sunday', 'Monday',
    'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday');

for (var i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i])
}


// assignment
var fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 2;

for (var i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (var i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

// add
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
console.log(numbers);

numbers.push(11);
numbers.push(12, 13);


// insert
for (var i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i - 1];
}

numbers[0] = -1;
console.log(numbers)

numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);

// delete
console.log(numbers.pop());
console.log(numbers);

console.log(numbers.shift());
console.log(numbers);

numbers.splice(5, 3);
console.log(numbers);

// delete numbers[0];

numbers.splice(5, 0, 2, 3, 4);
console.log(numbers);


// Two-dimensional arrays

var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

function printMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j])
        }
    }
}

printMatrix(averageTemp);


// array merge
var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers);


// iterator
var isEven = function (x) {
    console.log(x)
    return x % 2 == 0;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15];

console.log(numbers.every(isEven));
console.log(numbers.some(isEven));

numbers.forEach(function (x) {
    console.log(isEven(x));
});

var myMap = numbers.map(isEven);
console.log(myMap);

var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

var sum = numbers.reduce(function (previous,
                                   current,
                                   index) {
    return previous + current;
})
console.log(sum);


// es6 array

numbers.forEach(x => {
    console.log(isEven(x));
});


for (let n of numbers) {
    console.log((n % 2 == 0) ? 'even' : 'odd');
}

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

let entries = numbers.entries();
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

let keys = numbers.keys();
console.log(keys.next().value);
console.log(keys.next().value);
console.log(keys.next().value);

let values = numbers.values();
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);

let numbers2 = Array.from(numbers);
console.log(numbers2);

let evens = Array.from(numbers.filter(x => (x % 2 == 0)));
console.log(evens);


let numbers3 = Array.of(1);
let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbers3);
console.log(numbers4);
let numbersCopy = Array.of(...numbers4);
console.log(numbersCopy);

let arr = Array.of(1, 2, 3, 4, 5, 6);
console.log(arr);
arr.fill(0);
console.log(arr);

arr.fill(2, 1);
console.log(arr);
arr.fill(1, 3, 5);
console.log(arr);

arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(1, 3, 5);
console.log(arr);


// sort

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arr.reverse();
arr.sort();
console.log(arr);
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

arr.sort(compare);
console.log(arr);


var friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
];

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1
    }
    if (a.age > b.age) {
        return 1
    }
    return 0;
}

console.log(friends.sort(comparePerson));

var names = ['Ana', 'ana', 'john', 'John'];
names.sort();
console.log(names.sort());

names.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1
    }
    return 0;
});
console.log(names);


// find
console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15];

function multipleOf13(element, index, array) {
    return (element % 13 == 0) ? true : false;
}

console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

console.log(numbers.includes(15));
console.log(numbers.includes(20));

console.log(numbers.toString());
console.log(numbers.join("-"));


// Type Array
let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for (let i = 0; i < length; i++) {
    int16[i] = i + 1;
}
console.log(int16);