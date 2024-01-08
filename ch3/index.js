import {Stack, divideBy2, baseConverter} from "./stack.js";

let stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();


console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));