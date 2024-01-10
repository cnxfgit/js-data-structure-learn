import {LinkedList} from "../ch5/linkedList.js";

export function Dictionary() {
    let items = {}

    this.has = function (key) {
        return key in items;
    }

    this.set = function (key, value) {
        items[key] = value;
    }

    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.values = function () {
        let values = [];
        for (const key in items) {
            if (this.has(key)) {
                values.push(items[key]);
            }
        }
        return values;
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        let count = 0;
        for (const key in items) {
            if (this.has(key)) {
                count++;
            }
        }
        return count;
    }

    this.keys = function () {
        return Object.keys(items);
    }

    this.getItems = function () {
        return items;
    }
}


export function HashTable() {
    let table = [];

    function loseLoseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    function ValuePair(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }

    this.put = function (key, value) {
        let position = loseLoseHashCode(key);
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    }

    this.get = function (key) {
        let position = loseLoseHashCode(key);
        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }

            if (current.element.k === key) {
                return current.element.value;
            }
        }
        return undefined;
    }

    this.remove = function (key) {
        let position = loseLoseHashCode(key);

        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }

            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }

        return false;
    }

    this.print = function () {
        for (let i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    }
}

export function HashTable1() {
    let table = [];

    function loseLoseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }


    function ValuePair(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }


    this.put = function (key, value) {
        let position = loseLoseHashCode(key);

        if (table[position] === undefined) {
            table[position] = new ValuePair(key, value);
        } else {
            let index = ++position;
            while (table[index] !== undefined) {
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    }

    this.get = function (key) {
        let position = loseLoseHashCode(key);

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position].value;
            } else {
                let index = ++position;
                while (table[index] === undefined ||
                table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    return table[index].value;
                }
            }
        }

        return undefined;
    }

    this.remove = function (key) {
        let position = loseLoseHashCode(key);

        if (table[position] === undefined) {
        } else {
            let index = ++position;
            while (table[index] !== undefined) {
                index++;
            }
            table[index] = undefined;
        }
    }
}