/** Instance methods of object */
var type = function (o) {
    return Object.prototype.toString.call(o).match(/\[object (.*?)]/)[1].toLowerCase();
};

['Null',
    'Undefined',
    'Object',
    'Array',
    'Number',
    'Boolean',
    'String',
    'Function',
    'RegExp'
].forEach(function (t) {
    type['is' + t] = function (o) {
        return t.toLowerCase() === type(o);
    };
});

console.log(type.isUndefined(undefined));
console.log(type.isBoolean(true));

