/** get() */
// 链式操作
const pipe = function (value) {
    const funcStack = [];
    return new Proxy({}, {
        get(target, p, receiver) {
            if (p === 'get') {
                return funcStack.reduce((val, fn) => fn(val), value);
            }
            funcStack.push(global[p]);
            return receiver;
        }
    });
};

global.double = n => n * 2;
global.pow = n => n * n;
global.reverseInt = n => n.toString().split("").reverse().join("") | 0;

pipe(3).double.pow.reverseInt.get; // 63

// 生成各种 DOM 节点的通用函数dom （在浏览器环境下运行）
// const dom = new Proxy({}, {
//     get(target, p) {
//         return function (attrs = {}, ...children) {
//             const el = document.createElement(p);
//             for (let name of Object.keys(attrs)) {
//                 el.setAttribute(name, attrs[name]);
//             }
//
//             for (let child of children) {
//                 if (typeof child === 'string') {
//                     child = document.createTextNode(child);
//                 }
//                 el.appendChild(child);
//             }
//
//             return el;
//         };
//     }
// });
//
// const el = dom.div({},
//     'Hello, my name is ',
//     dom.a({href: '//example.com'}, 'Mark'),
//     '. I like:',
//     dom.ul({},
//         dom.li({}, 'The web'),
//         dom.li({}, 'Food'),
//         dom.li({}, '…actually that\'s it')
//     )
// );
//
// document.body.appendChild(el);

// 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。
target = Object.defineProperties({}, {
    foo: {
        value: 123,
        writable: false,
        configurable: false
    },
});

proxy = new Proxy(target, {
    get: () => 'abc'
});

try {
    console.log(proxy.foo);
} catch (e) {
    console.error(e);
}

/** set() */
// 如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用。
let obj = {};
Object.defineProperty(obj, 'foo', {
    value: 'bar',
    writable: false,
    configurable: false
});

proxy = new Proxy(obj, {
    set(target, p, value, receiver) {
        target[p] = 'bar+';
        // 严格模式下，set代理如果没有返回true，就会报错。
        return true;
    }
});
try {
    proxy.foo = 'baz';
} catch (e) {
    console.error(e);
}

/** apply() */
// apply方法拦截函数的调用、call和apply操作。
// 注意 target 参数是一个函数
proxy = new Proxy(() => "I am the target", {
    apply(target, thisArg, argArray) {
        return 'I am the proxy';
    }
});
console.log(proxy(), proxy.call(), proxy.apply());
