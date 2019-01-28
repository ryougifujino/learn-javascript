/** Object.defineProperty(),Object.defineProperties() */
var obj = Object.defineProperty({}, 'p', {
    value: 'pv',
    writable: false,    // values of writable, configurable and enumerable in default are false
    configurable: true,
    enumerable: true
});

console.log(obj.p);
obj.p = 'npv';
console.log(obj.p);

/** configurable */
var o1 = Object.defineProperty({}, 'p', {
    value: 1,
    writable: true,
    configurable: false
});

Object.defineProperty(o1, 'p', {
    value: 2
    // writable: still,
    // configurable: still
});
o1.p = 3;
console.log(o1.p);  // 3

var o2 = Object.defineProperty({}, 'p', {
    value: 1
    // writable: false,
    // configurable: false
});
o2.p = 2;
console.log(o2.p);  // 1

/** accessor */
obj = Object.defineProperty({}, 'p', {
    get: function () {
        return "getter";
    },
    set: function (value) {
        console.log(value);
    }
});
obj.p = 233;
console.log(obj.p);

obj = {
    set p2(value) {
        console.log(value);
    },
    get p2() {
        return "getter2";
    }
};
obj.p2 = 556;
console.log(obj.p2);

/** Object copy */
var extend = function (to, from) {
    for (var property in from) {
        to[property] = from[property];
    }

    return to;
};
var from = {
    get p() {
        return '1Q84';
    }
};
var to = extend({}, from);
console.log(to);

extend = function (to, from) {
    for (var property in from) {
        if (!from.hasOwnProperty(property)) continue;   // Object.getOwnPropertyDescriptor读不到继承属性的属性描述对象。
        Object.defineProperty(to, property, Object.getOwnPropertyDescriptor(from, property));
    }

    return to;
};
to = extend({}, from);
console.log(to);

/** Object status control */
// strength: freeze > seal > preventExtensions
obj = {
    p1: 1,
    p2: 2,
};
Object.preventExtensions(obj);
obj.p3 = 3;
console.log(obj.p3);    // undefined
// Object.defineProperty(obj, 'p3', {   // TypeError: Cannot define property p3, object is not extensible
//     value: 3
// });
delete obj.p2;
console.log(obj.p2);    // undefined (deleted)
obj.p1 = 1.1;
console.log(obj.p1);    // 1.1 (modified)

Object.seal(obj);
delete obj.p1;
console.log(obj.p1);    // 1.1 (not deleted)
obj.p1 = 1;
console.log(obj.p1);    // 1 (modified)

Object.freeze(obj);
obj.p1 = 1.1;
console.log(obj.p1);    // 1 (not modified)
