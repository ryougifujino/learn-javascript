/** Reflect.get(target, name, receiver)  */
let obj = {
    foo: 1,
    get bar() {
        return this.foo;
    }
};
console.log(Reflect.get(obj, 'bar'));   // 1

let receiverObj = {
    foo: 2
};
console.log(Reflect.get(obj, 'bar', receiverObj));  // 2

/** Reflect.set(target, name, value, receiver) */
obj = {
    foo: 3,
    set bar(value) {
        return this.foo = value;
    }
};
receiverObj = {
    foo: 4
};
Reflect.set(obj, 'bar', 233, receiverObj);
// 赋值函数的this绑定receiver
console.log(obj.foo, receiverObj.foo);  // 3 233

// 传入了receiver，导致触发Proxy.defineProperty拦截
let proxy = new Proxy({}, {
    set(target, p, value, receiver) {
        console.log('set');
        // receiver即proxy，这样设置的会是proxy（而不是target）上的值，
        // 从而触发defineProperty。
        Reflect.set(target, p, value, receiver);
    },
    defineProperty(target, p, attributes) {
        console.log('defineProperty');
        Reflect.defineProperty(target, p, attributes);
    }
});
proxy.a = 2;
// set
// defineProperty

/** Reflect.construct(target, args) */
function Greeting(name) {
    this.name = name;
}

let instance = new Greeting('Tom');
instance = Reflect.construct(Greeting, ['Jane']);

/** Reflect.ownKeys (target) */
// Reflect.ownKeys (target) = Object.getOwnPropertyNames + Object.getOwnPropertySymbols
obj = {
    foo: 1,
    bar: 2,
    [Symbol.for('baz')]: 3,
    [Symbol.for('baz2')]: 4
};
console.log(Object.getOwnPropertyNames(obj), Object.getOwnPropertySymbols(obj), Reflect.ownKeys(obj));
// [ 'foo', 'bar' ] [ Symbol(baz), Symbol(baz2) ] [ 'foo', 'bar', Symbol(baz), Symbol(baz2) ]
