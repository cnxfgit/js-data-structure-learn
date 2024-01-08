export function Stack() {
    let items = [];

    this.push = function (element) {
        items.push(element);
    }

    this.pop = function () {
        return items.pop();
    }

    this.peek = function () {
        return items[items.length - 1];
    }

    this.isEmpty = function () {
        return items.length === 0;
    }

    this.size = function () {
        return items.length;
    }

    this.clear = function () {
        items = [];
    }

    this.print = function () {
        console.log(items.toString());
    }
}


let items = new WeakMap();

class Es6Stack {
    constructor() {
        items.set(this, []);
    }

    push(element) {
        let s = items.get(this);
        s.push(element);
    }

    pop() {
        let s = items.get(this);
        return s.pop();
    }
}

export function divideBy2(decNumber) {
    let remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop();
    }

    return binaryString;
}

export function baseConverter(decNumber, base) {
    let remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}