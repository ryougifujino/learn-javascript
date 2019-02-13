let {foo: bar} = {foo: 'bar'};
console.log(bar);

let {foo2} = {foo2: 'bar2'};    // <=> let {foo2: foo2} = {foo2: 'bar2'}
console.log(foo2);

let x;
({x} = {x: 1});
console.log(x);

let arr = [1, 2, 3];
let {0: first, 2: third} = arr;
console.log(first, third);
