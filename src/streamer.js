const ArrayStreamer = require("./main/ArrayStreamer");
const ObjectStreamer = require("./main/ObjectStreamer");

function structureStream(data) {
    if (data === null) {
        throw Error("data is null.");
    } else if (Array.isArray(data)) {
        return new ArrayStreamer(data);
    } else if (typeof data === "object") {
        return new ObjectStreamer(data);
    } else {
        throw Error("data is must an array or object.");
    }
}

module.exports = structureStream;
