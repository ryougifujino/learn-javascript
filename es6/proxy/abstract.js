let proxy = new Proxy({}, {
    get: () => 35
});
console.log(proxy.time);    // 35

// 如果handler没有设置任何拦截，那就等同于直接通向原对象。
let target = {};
proxy = new Proxy(target, {});
proxy.a = 1;
console.log(target.a);  // 1

// 一个技巧是将 Proxy 对象，设置到object.proxy属性，从而可以在object对象上调用。
let object = {
    proxy: new Proxy({}, {
        get: function () {
            return 35;
        }
    })
};
console.log(object.name, object.proxy.name);    // undefined 35

// Proxy 实例也可以作为其他对象的原型对象。
proxy = new Proxy({}, {
    get: () => 35
});
let obj = Object.create(proxy);
console.log(obj.title);     // 35
