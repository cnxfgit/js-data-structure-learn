function fibonacci(num) {
    if (num === 1 || num === 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}


function fib(num) {
    let n1 = 1,
        n2 = 1,
        n = 1;
    for (let i = 3; i <= num; i++) {
        n = n1 + n2;
        n1 = n2;
        n2 = n;
    }
    return n;
}


function MinCoinChange(coins) {
    let cache = {};
    this.makeChange = function (amount) {
        let me = this;
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            return cache[amount];
        }
        let min = [], newMin, newAmount;
        for (let i = 0; i < coins.length; i++) {
            let coin = coins[i];
            newAmount = amount - coin;
            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount);
            }
            if (
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length)
                && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[amount] = min);
    };
}

let minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));


function knapSack(capacity, weights, values, n) {
    let i, w, a, b, kS = [];
    for (i = 0; i <= n; i++) {
        kS[i] = [];
    }
    for (i = 0; i <= n; i++) {
        for (w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                kS[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
                b = kS[i - 1][w];
                kS[i][w] = (a > b) ? a : b;
            } else {
                kS[i][w] = kS[i - 1][w];
            }
        }
    }
    return kS[n][capacity];
}

var values = [3, 4, 5],
    weights = [2, 3, 4],
    capacity = 5,
    n = values.length;
console.log(knapSack(capacity, weights, values, n));

function matrixChainOrder(p, n) {
    let i, j, k, l, q, m = [];
    for (i = 1; i <= n; i++) {
        m[i] = [];
        m[i][i] = 0;
    }
    for (l = 2; l < n; l++) {
        for (i = 1; i <= n - l + 1; i++) {
            j = i + l - 1;
            m[i][j] = Number.MAX_SAFE_INTEGER;
            for (k = i; k <= j - 1; k++) {
                q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (q < m[i][j]) {
                    m[i][j] = q;
                }
            }
        }
    }
    return m[1][n - 1];
}

function MinCoinChange1(coins) {
    this.makeChange = function (amount) {
        let change = [],
            total = 0;
        for (let i = coins.length; i >= 0; i--) {
            let coin = coins[i];
            while (total + coin <= amount) {
                change.push(coin);
                total += coin;
            }
        }
        return change;
    };
}

minCoinChange = new MinCoinChange1([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));


function findMinArray(array) {
    let minValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
    }
    return minValue;
}

console.log(findMinArray([8, 6, 4, 5, 9]));

const min_ = function (array) {
    return Math.min(...array);
}

console.log(min_([8, 6, 4, 5, 9]));

const min = arr => Math.min(...arr);
console.log(min([8, 6, 4, 5, 9]));

let daysOfWeek = [
    {name: 'Monday', value: 1},
    {name: 'Tuesday', value: 2},
    {name: 'Wednesday', value: 7}
];

let daysOfWeekValues_ = [];
for (let i = 0; i < daysOfWeek.length; i++) {
    daysOfWeekValues_.push(daysOfWeek[i].value);
}

let daysOfWeekValues = daysOfWeek.map(function (day) {
    return day.value;
})

console.log(daysOfWeekValues);

let positiveNumbers_ = function (array) {
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positive.push(array[i]);
        }
    }
    return positive;
}
console.log(positiveNumbers_([-1,1,2,-1]));


let positiveNumbers = function (array) {
    return array.filter(function (num) {
        return num >= 0;
    });
}
console.log(positiveNumbers([-1,1,2,-1]));

let sumValues = function(array) {
    let total = array[0];
    for (let i = 1; i < array.length; i++) {
        total += array[i];
    }
    return total;
};
console.log(sumValues([1, 2, 3, 4, 5]));

let sum_ = function(array) {
    return array.reduce(function(a, b) {
        return a + b;
    })
};
console.log(sum_([1, 2, 3, 4, 5]));
