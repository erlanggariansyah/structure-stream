class LinkedHashMap {
    constructor() {
        this.map = {};
        this.keys = [];
    }

    put(key, value) {
        if (!this.map[key]) {
            this.keys.push(key);
        }

        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        let index = this.keys.indexOf(key);
        if (index > -1) {
            this.keys.splice(index, 1);
            delete this.map[key];
        }
    }

    clear() {
        this.map = {};
        this.keys = [];
    }

    size() {
        return this.keys.length;
    }

    values() {
        let values = [];
        for (let key of this.keys) {
            values.push(this.map[key]);
        }

        return values;
    }

    keys() {
        return this.keys;
    }

    entries() {
        let entries = [];
        for (let key of this.keys) {
            entries.push([key, this.map[key]]);
        }

        return entries;
    }

    forEach(callback) {
        for (let key of this.keys) {
            callback(this.map[key], key);
        }
    }
}

module.exports = LinkedHashMap;
