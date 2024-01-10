import {Dictionary, HashTable} from "./dictionary.js";

let dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf'));

console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));


dictionary.delete('John');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());

let table = new HashTable();
table.put('Gandalf', 'gandalf@email.com');
table.put('John', 'johnsnow@email.com');
table.put('Tyrion', 'tyrion@email.com');

console.log(table.get('Gandalf'));
console.log(table.get('Loiane'));

table.remove('Gandalf')
console.log(table.get('Gandalf'));


let hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');


hash.print();


