/** 无参数情况 */
let s = Symbol();
console.log(s, typeof s);   // Symbol() 'symbol'

/** 字符串作为参数 */
s = Symbol('foo');
console.log(s, s.toString());   // Symbol(foo) 'Symbol(foo)'

/** 对象作为参数 */
const obj = {
    toString() {
        return 'abc';
    }
};
s = Symbol(obj);
console.log(s, s.toString());     // Symbol(abc) 'Symbol(abc)'

/** 相同参数的Symbol函数的返回值不相等 */
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2);     // false
s1 = Symbol('a');
s2 = Symbol('a');
console.log(s1 === s2);     // false

/** Symbol.prototype.description */
console.log(s1.description);    // "a" （node 环境下输出可能不同）

/** 作为属性名的 Symbol */
let a = {};
Object.defineProperty(a, s1, {value: 'Hello'});
console.log(a[s1]);     // Hello
// Symbol 值作为对象属性名时，不能用点运算符。

// 用 Symbol 来定义常量
const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}

console.log(getComplement(COLOR_GREEN) === COLOR_RED);  // true

/** Symbol.for()，Symbol.keyFor() */
console.log(Symbol.for('foo') === Symbol.for('foo'));   // true
console.log(Symbol('foo') === Symbol('foo'));   // false

console.log(Symbol.keyFor(Symbol.for('foo')));  // foo
console.log(Symbol.keyFor(Symbol('foo')));  // undefined

/** 内置的 Symbol 值 */
// Symbol.hasInstance
class MyClass {
    [Symbol.hasInstance](foo) {
        console.log(foo);
        return foo instanceof Array;
    }
}

console.log([1, 2] instanceof new MyClass());
// output:
// [ 1, 2 ]
// true
console.log([1, 2] instanceof MyClass); // false

class Even {
    static [Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
}

//<=>
// const Even = {
//     [Symbol.hasInstance](obj) {
//         return Number(obj) % 2 === 0;
//     }
// };
console.log(1 instanceof Even);     // false
console.log(2 instanceof Even);     // true

// Symbol.species
class MyArray extends Array {

}

a = new MyArray();
console.log(a.map(a => a) instanceof MyArray);  // true

class MyArray2 extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

a = new MyArray2();
console.log(a.map(a => a) instanceof MyArray2); // false

// Symbol.replace
let x = {
    [Symbol.replace](...s) {
        console.log(s);
    }
};

'Hello'.replace(x, 'World');    // [ 'Hello', 'World' ]
