function* main() {
    let result = yield request('https://www.google.com');
    console.log(result);
}

function request(url) {
    makeAjaxCall(url, function (result) {
        it.next(result);
    })
}

function makeAjaxCall(url, callback) {
    setTimeout(function () {
        callback("request result");
    },1000);
}

let it = main();
it.next();