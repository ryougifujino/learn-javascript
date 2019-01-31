/** Shortcomings of constructor */
function Cat() {
    this.run = function () {
        console.log('running');
    };
}

var cat1 = new Cat();
var cat2 = new Cat();
console.log(cat1.run === cat2.run);

/** Prototype property */
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(this.name + ' is walking');
};

var cat = new Animal('Cat');
var dog = new Animal('Dog');
cat.walk();
dog.walk();

/** Constructor property */
function F() {

}

console.log(F.prototype.constructor === F);
var f = new F();
console.log(f.constructor === F);
console.log(f.constructor === F.prototype.constructor);
console.log(f.hasOwnProperty('constructor'));

/** Inheritance of constructor */
function Super(x) {
    this.x = x;
}

function Sub(x, y) {
    Super.call(this, x);
    this.y = y;
}

Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;

var sub = new Sub(1, 2);
console.log(sub instanceof Super);
console.log(sub instanceof Sub);
