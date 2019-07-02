// 观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。
let observer;
const observable = obj => new Proxy(obj, {
    set(target, p, value, receiver) {
        Reflect.set(target, p, value, receiver);
        observer && observer();
    }
});
const observe = fn => observer = fn;

const person = observable({
    name: 'Tom',
    age: 20
});

function print() {
    console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = 'Jane';

