var result1 = new Boolean();
var result2 = true;

typeof result1;
// "object"
typeof result1.valueOf();
// "boolean"

console.log(Boolean("test"));
console.log(Boolean(""));
console.log(Boolean({}));
