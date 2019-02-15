/** Promise.reject() */
let thenable = {
    then: function (resolve, reject) {
        reject('fail');
    }
};

Promise.reject(thenable).catch(e => console.log(e === thenable));
// 注意这里的e并不是fail而是thenable对象，这与Promise.resolve使用thenable不同。
