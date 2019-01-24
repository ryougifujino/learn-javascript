/** Function declaration */
var print = function p(x) {
    if (typeof p === 'function') {
        console.log(x);
    }
};

var add = new Function('a', 'b', 'return a+b;');
print(add(1, 1));

/** Properties and methods in function */
var printFunctionName = function (f) {
    console.log(f.name);
};
var f = function myFun() {
};

function f2() {
}

printFunctionName(f);
printFunctionName(printFunctionName);
printFunctionName(f2);
