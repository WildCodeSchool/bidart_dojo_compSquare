const assert = require("assert");
const compSquare = require("./function");

assert.strictEqual(typeof compSquare, "function");
assert.strictEqual(compSquare.isArray(array1), true);
assert.strictEqual(Array.isArray(array2), true);
assert.strictEqual(compSquare(array1, arra2), true);

console.log("test OK");
