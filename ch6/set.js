export function Set() {
    let items = {};

    this.has = function (value) {
        return items.hasOwnProperty(value);
    }

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }

    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return Object.keys(items).length;
    }

    this.sizeLegacy = function () {
        let count = 0;
        for (const key in items) {
            if (items.hasOwnProperty(key)) {
                ++count;
            }
        }

        return count;
    }

    this.values = function () {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    }

    this.valuesLegacy = function () {
        let values = [];
        for (const key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    }

    this.union = function (other) {
        let unionSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = other.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }


    this.intersection = function (other) {
        let intersectionSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (other.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    }

    this.difference = function (other) {
        let differenceSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!other.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    }

    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }

}