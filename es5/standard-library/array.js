/** splice() */
var a = [1, 2, 3, 4, 5];
a.splice(4, 3);
console.log(a);             // [ 1, 2, 3, 4 ]
a.splice(2, 1, 'a', 'b');
console.log(a);             // [ 1, 2, 'a', 'b', 4 ]
a.splice(-3, 2);
console.log(a);             // [ 1, 2, 4 ]

// just insert
a.splice(2, 0, 'a');
console.log(a);             // [ 1, 2, 'a', 4 ]

a.splice(2);
console.log(a);             // [ 1, 2 ]

/** reduce()，reduceRight() */
var result = [1, 2, 3, 4, 5].reduceRight(function (a, b) {
    // a: accumulation
    return a + b;
}, 10);
console.log(result);
