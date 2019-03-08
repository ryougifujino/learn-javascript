/** super 关键字 */
// 由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。
class A {
    constructor() {
        this.x = 1;
    }
}

class B extends A {
    constructor() {
        super();
        this.x = 2;
        super.x = 3;
        console.log(super.x);
        console.log(this.x);
    }
}

new B();

/** Object.getPrototypeOf() */
console.log(Object.getPrototypeOf(B) === A);    // true
// 注意，如果是用ES5的继承方法：A、B都为构造函数的话，上式为false。