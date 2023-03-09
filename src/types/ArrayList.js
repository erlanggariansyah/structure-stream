class ArrayList {
    constructor() {
        this.items = [];
    }

    add(element) {
        this.items.push(element);
    }

    insertAt(index, element) {
        this.items.splice(index, 0, element);
    }

    removeFrom(index) {
        this.items.splice(index, 1);
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.toString();
    }

    toArray() {
        return this.items.slice();
    }
}

module.exports = ArrayList;
