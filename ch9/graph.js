import {Dictionary} from "../ch7/dictionary.js";
import {Queue} from "../ch4/queue.js";

export function Graph() {
    let vertices = [];
    let adjList = new Dictionary();

    function initializeColor() {
        let color = [];
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, []);
    }

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function () {
        let s = ''
        for (let i = 0; i < vertices.length; i++) {
            s += vertices[i] + '->';
            let neighbors = adjList.get(vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }

    this.bfs = function (v, callback) {
        let color = initializeColor(),
            queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = adjList.get(u);

            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    this.BFS = function (v) {
        let color = initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];
        queue.enqueue(v);

        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grep';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        }
    }

    this.dfs = function (callback) {
        let color = initializeColor();

        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit([vertices[i]], color, callback);
            }
        }

        function dfsVisit(u, color, callback) {
            color[u] = 'grey';
            if (callback) {
                callback(u);
            }

            let neighbors = adjList.get(u);
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    dfsVisit(w, color, callback);
                }
            }
            color[u] = 'black';
        }
    }

    var time = 0;
    this.DFS = function () {
        var color = initializeColor(), //{2}
            d = [],
            f = [],
            p = [];
        time = 0;
        for (var i = 0; i < vertices.length; i++) { //{3}
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }
        for (i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p);
            }
        }
        return {
            discovery: d,
            finished: f,
            predecessors: p
        };
    };
    var DFSVisit = function (u, color, d, f, p) {
        console.log('discovered ' + u);
        color[u] = 'grey';
        d[u] = ++time;
        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
        }
        color[u] = 'black';
        f[u] = ++time;
        console.log('explored ' + u);
    };
}

