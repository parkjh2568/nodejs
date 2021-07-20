var a = 1;
var b = 2;
var c = 3, d = 10;

console.log((a = b+1));
console.log((a = b-1));
console.log((a = b*d));
console.log((a = a/10));
console.log((a++));
console.log((a));
console.log((a--));
console.log((a));

var str1 = "hi";
var str2 = "world";
var str3 = null;

str3 = str1 + " ";

console.log(str3);

str3 = str3 + str2;

console.log(str3);

a = 1;
b = 3;

//(조건)? 참:거짓
(a > b)? (console.log("a is big")):(console.log("a is small"));
