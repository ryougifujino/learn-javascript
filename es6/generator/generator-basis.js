// 与 Iterator 接口的关系
let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for (let value of myIterable) {
    console.log(value);
}

console.log([...myIterable]);   // 具有Iterator接口的对象，可以使用扩展运算符
