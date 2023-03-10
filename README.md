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
const structureStream = require("structure-stream");
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

### Creating a stream
To create a stream, pass an array or an object to the `structureStream()` function:
```javascript
const data = [1, 2, 3, 4, 5];
const myStream = structureStream(data);
```

### Using basic operators
After creating a stream, you can use stream operators such as `map`, `filter`, and `reduce` to manipulate the data:
```javascript
// Multiply each item in the stream by 2
const result = myStream
    .map((item) => item * 2)
    .toArray();
console.log(result); // [2, 4, 6, 8, 10]

// Filter the stream to include only even numbers
const result2 = myStream
    .filter((item) => item % 2 === 0)
    .toArray();
console.log(result2); // [2, 4]

// Reduce the stream to find the sum of all items
const result3 = myStream
    .reduce((acc, item) => acc + item, 0);
console.log(result3); // 15

const resultSum = myStream
    .sum();
console.log(resultSum); // 15

// Find max value of all items
const resultMax = myStream
    .max();
console.log(resultMax) // 5

// Find min value of all items
const resultMin = myStream
    .min();
console.log(resultMin) // 1

// Find average value of all items
const resultAvg = myStream
    .average();
console.log(resultAvg) // 3

// Sort all item by ascending
const resultSortAsc = myStream
    .sortAsc();
console.log(resultSortAsc) // [1, 2, 3, 4, 5]

// Sort all item by descending
const resultSortDesc = myStream
    .sortDesc();
console.log(resultSortDesc) // [5, 4, 3, 2, 1]
```

### Chaining stream operators
You can chain multiple stream operators together to create more complex data manipulation:
```javascript
const data2 = [
    { name: "John", age: 23 },
    { name: "Jane", age: 31 },
    { name: "Bob", age: 28 },
    { name: "Alice", age: 19 },
];

const myStream2 = structureStream(data2);

// Filter the stream to include only people under 30,
// map the stream to include only their names,
// and reduce the stream to concatenate the names
const result4 = myStream2
    .filter((person) => person.age < 30)
    .map((person) => person.name)
    .reduce((acc, name) => acc + ", " + name, "");
console.log(result4); // "John, Alice"
```

### Converting a stream to Array or Object
To convert a stream back to an array, use the `toArray()` method:
```javascript
const data3 = [1, 2, 3, 4, 5];
const myStream3 = structureStream(data3);

const result5 = myStream3
    .map((item) => item * 2)
    .toArray();
console.log(result5); // [2, 4, 6, 8, 10]
```

To convert a stream back to an object, use the `toObject()` method:
```javascript
const data4 = {
    name: "John",
    age: 23,
    gender: "male",
};

const myStream4 = structureStream(data4);

const result6 = myStream4
    .filter((value, key) => typeof value === "string")
    .toObject();
console.log(result6); // {name: "John", gender: "male"}
```

## License
This package is released under the MIT license.
