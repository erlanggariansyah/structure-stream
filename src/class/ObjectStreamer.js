class ObjectStreamer {
    constructor(object) {
        this.entries = Object.entries(object);
    }

    static of(object) {
        return new ObjectStreamer(object);
    }

    filter(predicate) {
        return new ObjectStreamer(this.entries.filter(([key, value]) => predicate(key, value)));
    }

    map(transform) {
        return new ObjectStreamer(this.entries.map(([key, value]) => [key, transform(key, value)]));
    }

    flatMap(transform) {
        return new ObjectStreamer(this.entries.flatMap(([key, value]) => transform(key, value)));
    }

    forEach(action) {
        this.entries.forEach(([key, value]) => action(key, value));
    }

    reduce(reducer, initialValue) {
        return this.entries.reduce((acc, [key, value]) => reducer(acc, key, value), initialValue);
    }

    toObject() {
        return Object.fromEntries(this.entries);
    }

    toArray() {
        return this.entries;
    }
    
    toString() {
        return JSON.stringify(this.toObject());
    }
}

module.exports = ObjectStreamer;
