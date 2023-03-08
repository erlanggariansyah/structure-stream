# StructureStreamJS
Java Stream-like API for JavaScript programmers.

## Description
A lightweight and easy-to-use JavaScript library for data manipulation using stream processing. StructureStreamJS provides a simple and intuitive way to manipulate arrays and objects using functional programming concepts such as map, filter, and reduce. 

StructureStreamJS provides functionality like Java Stream in JavaScript which will certainly be very useful especially for those who have a development background in Java.

JavaScript already has a number of built-in features such as map, filter, and reduce which are similar to Java Stream, but incomplete and not as complete as Java Stream. Also, with this package, JavaScript programmers can use a syntax that is more familiar to those with experience with Java Stream.

This package is expected to help increase productivity and efficiency in application development, especially for processing complex data and processing a lot of data in a short time.

## Installation
You can install StructureStreamJS using npm:
```javascript
npm install structure-stream
```
## Usage
To use StructureStreamJS, simply require the package in your JavaScript file:

```javascript
const stream = require("streamer-js");
```

Or you can directly use it with static method of ArrayStreamer & ObjectStreamer class:

### Array Stream
```javascript
const ArrayStreamer = require("structure-stream/src/class/ArrayStreamer");

let exampleArray = [1, 2, 3];
ArrayStreamer.of(exampleArray);
```

### Object Stream
```javascript
const ObjectStreamer = require("structure-stream/src/class/ObjectStreamer");

let exampleArray = { name: "Linda", surname: "Dian" };
ObjectStreamer.of(exampleArray);
```
