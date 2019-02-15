/** Promise.resolve() */
// 参数是一个thenable对象
// Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
let thenable = {
    then: function (resolve, reject) {
        resolve(99);
    }
};

Promise.resolve(thenable).then(result => console.log(result));

// 参数不是具有then方法的对象，或根本就不是对象
Promise.resolve('ok').then(result => console.log(result));

// 不带有任何参数
setTimeout(function () {
    console.log(3);
}, 0);
Promise.resolve().then(() => console.log(2));
console.log(1);
