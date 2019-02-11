/** Promise.prototype.then() */
var p1 = function (resolve, reject) {
    resolve("Succeeded~");
};

var p2 = function (resolve, reject) {
    reject(new Error("Failed~"));
};

new Promise(p1).then(console.log, console.error);
new Promise(p2).then(console.log, console.error);

// new Promise(p1)
//     .then(function (v) {
//         console.log(1, v);
//         return v + '~';
//     })
//     .then(function (v) {
//         console.log(2, v);
//         return v + '~';
//     });

// function test(p) {
//     new Promise(p)
//         .then(function (v) {
//             console.log(1, v);
//             return new Error("Failed~");
//         })
//         .then(function (v) {
//             console.log(2, v);
//             return v + '~';
//         })
//         .then(function (v) {
//             console.log(3, v);
//         }, function (err) {
//             console.log(4, err);
//         });
// }
//
// test(p1);
// test(p2);

// new Promise(p1)
//     .then(function (v) {
//         console.log(1, v);
//         return new Promise(function (resolve, reject) {
//             reject(new Error(v + "~"))
//         });
//     })
//     .then(function (v) {
//         console.log(2, v);
//         return v + '~';
//     })
//     .then(function (v) {
//         console.log(3, v);
//     }, function (err) {
//         console.log(4, err);
//     });

/** Microtask */
setTimeout(function () {
    console.log(1);
}, 0);

new Promise(function (resolve, reject) {
    resolve(2);
}).then(console.log);

console.log(3);
