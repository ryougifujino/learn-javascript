/** Default value */
let [foo = true] = [];
console.log(foo);

let [x = 1] = [undefined];
console.log(x);
[x = 1] = [null];
console.log(x);
