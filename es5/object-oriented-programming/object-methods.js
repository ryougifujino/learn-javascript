/** Object.getPrototypeOf() */
console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

function _f() {
}

console.log(Object.getPrototypeOf(_f) === Function.prototype);

/** Object.setPrototypeOf() */
var F = function () {
    this.foo = "bar";
};

var f = new F();
//<=>
f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
console.log(Object.getPrototypeOf(f) === F.prototype);
console.log(f.constructor === F);
console.log(f.foo);

/** Object.create() */
var a = {
    print: function () {
        console.log('Ok');
    }
};
var b = Object.create(a);
b.print();
console.log(Object.getPrototypeOf(b) === a);    // true

// Object.create <=>
function create(obj) {
    var F = function () {
    };
    F.prototype = obj;
    return new F();
}

var obj = Object.create({}, {
    p: {
        value: 233,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(obj.p);

/** Get all properties(including inherited, non-enumerable) of object */
function inheritedPropertyNames(obj) {
    var props = {};
    while (obj) {
        Object.getOwnPropertyNames(obj).map(function (name) {
            props[name] = true;
        });
        obj = Object.getPrototypeOf(obj);
    }
    return Object.getOwnPropertyNames(props);
}

console.log(inheritedPropertyNames(Date));

/** Copy object */
function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
}

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source).map(function (propertyKey) {
        var descriptor = Object.getOwnPropertyDescriptor(source, propertyKey);
        Object.defineProperty(target, propertyKey, descriptor);
    });
}

function copyObjectES2017(orig) {
    return Object.create(Object.getPrototypeOf(orig), Object.getOwnPropertyDescriptors(orig));
}
