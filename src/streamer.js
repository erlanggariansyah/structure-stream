const StructureStreamer = require("./class/StructureStreamer")

function stream(data) {
    if (data === null) throw new Error("data is null.");

    return new StructureStreamer(data);
}

module.exports = stream;
