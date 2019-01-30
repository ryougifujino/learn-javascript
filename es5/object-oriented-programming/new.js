/** Principle of keyword new */
function _new(/* constructor, params */) {
    var args = [].slice.call(arguments);
    var constructor = args.shift();
    var context = Object.create(constructor.prototype);
    var result = constructor.apply(context, args);
    return (result !== null && typeof result === 'object') ? result : context;
}

function Car(engine) {
    this.engine = engine;
}

var car1 = _new(Car, 'v1');
var car2 = new Car('v2');
console.log(car1.engine);
console.log(car2.engine);

/** new.target */
function f() {
    console.log(f === new.target);
}

f();        // false
new f();    // true
