/** 取值函数（getter）和存值函数（setter）*/
class MyClass {
    constructor() {
    }

    set prop(value) {
        console.log(`setter: ${value}`)
    }

    get prop() {
        return "getter";
    }
}

let instance = new MyClass();
console.log(MyClass.prototype.prop);    // getter
instance.prop = 'p';                    // setter: p
console.log(instance.prop);             // getter
console.log('set' in Object.getOwnPropertyDescriptor(MyClass.prototype, 'prop'));   // true

/** Class 表达式 */
let person = new class {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}('Jack');

console.log(person.getName());      // Jack

/** Generator 方法 */
class Foo {
    constructor(...args) {
        this.args = args;
    }

    * [Symbol.iterator]() {
        for (let arg of this.args) {
            yield arg;
        }
    }
}

for (let x of new Foo('Hello', 'World')) {
    console.log(x);
}

/** 静态方法 */
class Bar {
    static foo() {
        this.bar();
    }

    static bar() {
        console.log("Bar")
    }
}

class Baz extends Bar {

    static bar() {
        console.log('Baz');
    }
}

Baz.foo();

/** 实例属性的新写法 */
// class Foobar {
//     foo = 'foo';     // not supported in Node.js
//     bar = 'bar';
//
//     constructor() {
//
//     }
//
//     print() {
//         console.log(this.foo, this.bar);
//     }
// }
//
// new Foobar().print();

/** new.target 属性 */
// 子类继承父类时，new.target会返回子类。
class Shape {
    constructor() {
        if (new.target === Shape) {
            console.log("本类不能实例化");
        }
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
    }
}

new Shape();
new Rectangle();
