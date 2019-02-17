// 在 JavaScript 语言中，Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。
const Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this, ...args, callback);
        }
    }
};

// 一个多参数函数
function f(a, cb) {
    cb(a);
}

let ft = Thunk(f);
// console.log是回调函数，且只有一个参数
ft(1)(console.log);