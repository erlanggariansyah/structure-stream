class ArrayStreamer {
    constructor(array) {
        this.array = array;
    }

    static of(array) {
        return new ArrayStreamer(array);
    }

    filter(predicate) {
        return new ArrayStreamer(this.array.filter(predicate));
    }

    map(transform) {
        return new ArrayStreamer(this.array.map(transform));
    }

    flatMap(transform) {
        return new ArrayStreamer(this.array.flatMap(transform));
    }

    forEach(action) {
        this.array.forEach(action);
    }

    reduce(reducer, initialValue) {
        return this.array.reduce(reducer, initialValue);
    }

    sum() {
        return this.array.reduce((acc, curr) => acc + curr, 0);
    }

    max() {
        return Math.max(...this.array);
    }

    min() {
        return Math.min(...this.array);
    }

    average() {
        return this.array.reduce((acc, cur) => acc + cur, 0) / this.array.length;
    }

    sortAsc() {
        return new ArrayStreamer(this.array.sort((a, b) => a - b));
    }

    sortDesc() {
        return new ArrayStreamer(this.array.sort((a, b) => b - a));
    }

    merge(...arrays) {
        return new ArrayStreamer(this.array.concat(...arrays));
    }

    distinct() {
        return new ArrayStreamer([...new Set(this.array)]);
    }

    get(index) {
        return this.array[index];
    }

    size() {
        return this.array.length;
    }

    toObject() {
        return this.array.reduce((acc, item) => ({ ...acc, ...item }), {});
    }

    toArray() {
        return this.array.slice();
    }

    toString() {
        return JSON.stringify(this.array);
    }
}

module.exports = ArrayStreamer;
