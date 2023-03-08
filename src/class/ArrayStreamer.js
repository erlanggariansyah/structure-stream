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
