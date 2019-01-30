/** Function in object */
var a = {
    p: 'Hello',
    b: {
        m: function () {
            console.log(this.p);
        }
    }
};
a.b.m();    // undefined

a = {
    p: 'Hello',
    b: {
        p: 'World',
        m: function () {
            console.log(this.p);
        }
    }
};
a.b.m();    // World

<!-- -->
var o = {
    m: function () {
        console.log(this);      // this -> m
        function f() {
            if (typeof global !== 'undefined') {
                console.log(this === global);   // this -> global object
            } else {
                console.log(this === window);   // this -> Window
            }
        }

        f();
    }
};
o.m();

/** Function.prototype.apply() */
// convert empty to undefined
console.log(Array.apply(null, [1, , 2]));

/** Function.prototype.bind() */
function add(x, y) {
    return this.m + this.n + x + y;
}

var obj = {
    m: 1,
    n: 2
};
var newAdd = add.bind(obj, 3);
console.log(newAdd(4));     // 10

// combined with call
// method.call(context, args) means calling method on context with args
// context.method(args) <=> method.call(context, args) <=> method.bind(context)(args)
console.log([1, 2, 3, 4].slice(1, 2));
//          |--context--|method|args|

console.log((Array.prototype.slice).call([1, 2, 3, 4], 1, 2));
//          |--------method-------|              |--context-|          |args|
//          |--------context------|method|       |----------args------------|
console.log((Function.prototype.call).call(Array.prototype.slice, [1, 2, 3, 4], 1, 2));
//          |---------method--------|     |--------context------|          |-------args-------|

console.log((Array.prototype.slice).bind([1, 2, 3, 4])(1, 2));
//          |--------method-------|              |--context--|-args-|
//          |--------context------|method|       |---args----|
console.log((Function.prototype.bind).bind(Array.prototype.slice)([1, 2, 3, 4])(1, 2));
//          |---------method--------|     |--------context-------|-----args----|

var slice = Function.prototype.call.bind(Array.prototype.slice);
console.log(slice([1, 2, 3, 4], 1, 2));
// 如何从slice([1, 2, 3, 4], 1, 2)这个调用形式中推理出slice的构造：
// slice([1, 2, 3, 4], 1, 2) 这一个调用从字面意义上看是：在context（[1, 2, 3, 4]）上调用slice，args为1, 2。
// 但从形式上看，其args是[1, 2, 3, 4], 1, 2。所以要想办法构建slice，让其从意义和形式上都符合要求。
// 从slice([1, 2, 3, 4], 1, 2)这个调用的入参形式上看，很像是call里的context + args，结合意义，可得到：
// Array.prototype.slice.call([1, 2, 3, 4], 1, 2)。
// 但这样改用bind后只能将args1, 2去掉，[1, 2, 3, 4] 作为context仍然不能参数化，要想办法把这两者合起来作为args，
// 然后用bind把他们去掉。
// 把[1, 2, 3, 4], 1, 2整体视为args后，我们发现可以将Array.prototype.slice视为context，call视为method，
// 然后再进行一次变换后得：(Function.prototype.call).call(Array.prototype.slice, [1, 2, 3, 4], 1, 2)。
// 再改为bind即可：(Function.prototype.call).bind(Array.prototype.slice) ([1, 2, 3, 4], 1, 2)，slice
// 即为前半部分。

// 如何从 Function.prototype.call.bind(Array.prototype.slice) 推理出 slice 的使用方法：
// 其中 Function.prototype.call 为method，Array.prototype.slice为context，变换得：
// Array.prototype.slice.call，即为变量slice。
// 可知调用时，参数应为context + args 形式，因为.call前是Array 的slice，所以context必定为类数组，args的形式
// 和Array中slice函数的参数形式一致。

<!-- -->
function f() {
    console.log(this.p)
}

obj = {
    p: 233
};
var bind = Function.prototype.call.bind(Function.prototype.bind);
bind(f, obj)();
// 如何从bind(f, obj)()这个调用形式中推理出bind的构造：
// bind(f, obj)(); 可以分解为两步：1、var tmp = bind(f, obj); 2、tmp();
// 其中 bind(f, obj) 从字面意义上看是将f与obj绑定，获得一个上下文为obj的函数f。可以很容易的得到 f.bind(obj)
// Function.prototype.bind.call(f, obj)
// Function.prototype.call.call(Function.prototype.bind, f, obj)
// Function.prototype.call.bind(Function.prototype.bind) (f, obj)

// 如何从 Function.prototype.call.bind(Function.prototype.bind) 推理出 bind 的使用方法：
// Function.prototype.bind 为context，Function.prototype.call 为method，变换得：
// (Function.prototype.bind).call，即为变量bind。
// 可知调用时，参数应为context + args 形式，因为.call前是Function 的bind，可知context必定为一个函数，args的
// 形式和Function中bind函数的参数形式一致（参考"f.bind(obj)"，即context + args（选））。

// 结论
// Function.prototype.call.bind(func) 可得到一个f函数，其参数第一位为context，后面的为args。f的调用效果和
// 直接使用func函数的效果相同。