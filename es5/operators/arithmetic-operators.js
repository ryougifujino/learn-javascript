/** Addition of objects */
var obj = {p: 1};
console.log(obj + 1);

obj.toString = function () {
    return 'hello';
};
console.log(obj + 1);

obj.valueOf = function () {
    return 1;
};
console.log(obj + 1);

// special case
obj = new Date();
obj.valueOf = function () {
    return 1;
};
obj.toString = function () {
    return 'hello';
};
console.log(obj + 1);

/** Exponential operator */
console.log(2 ** 2);
console.log(2 ** 2 ** 3);   //=> 2 ** (2 ** 3)
