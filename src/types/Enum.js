class Enum {
    static #values = [];

    constructor(name, value) {
        this.name = name;
        this.value = value;
        Enum.#values.push(this);
    }

    static values() {
        return Enum.#values;
    }

    static fromName(name) {
        return Enum.#values.find(name => name.name === name);
    }

    toString() {
        return this.name;
    }
}

module.exports = Enum;
