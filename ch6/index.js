import {Set} from "./set.js";

let set = new Set()
set.add(1);
set.add(2);

console.log(set.values());
console.log(set.has(1));
console.log(set.size());

console.log(set.add(2));
console.log(set.size());

set.remove(1);
console.log(set.values());
set.remove(2);
console.log(set.values());


let setA = new Set();
setA.add(1);
setA.add(2);

let setB = new Set();
setB.add(2);
setB.add(3);

console.log(setB.union(setA).values());


setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

console.log(setB.intersection(setA).values());
console.log(setB.difference(setA).values());


setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setB.add(4);

setB = new Set();
setB.add(2);
setB.add(3);


console.log(setB.subset(setA));

console.log(setA.subset(setB));

