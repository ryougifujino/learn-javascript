/** 属性的简洁表示法 */
const foo = 'bar';
console.log({foo});

console.log({
    m() {
        // I am a method in object
    }
});

/** 属性名表达式 */
const p = 'print';
let o = {
    ['a' + 'b']: 'AB',
    [p]() {
        console.log(this['ab']);
    }
};
o.print();  // or o[p]();

/** super 关键字 */
const proto = {
    foo: 'proto'
};
const obj = {
    foo: 'obj',
    printFoo() {    // 只有这样的简写能使用super
        console.log(super.foo);
    }
};
Object.setPrototypeOf(obj, proto);
obj.printFoo();

/** 对象的扩展运算符 */
//解构赋值
let {x, y, ...z} = {x: 0, y: 1, a: 2, b: 3};
console.log(x, y, z);

//扩展运算符
let obj2 = {...['a', 'b', 'c']};
console.log(obj2);

// 合并对象
let objA = {
    'a': 'A'
};
let objB = {
    'b': 'B'
};
let mergedObj = {...objA, ...objB};
console.log(mergedObj);
