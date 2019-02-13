/** 与解构赋值默认值结合使用 */
function m1({x = 0, y = 0} = {}) {
    return [x, y];
}

function m2({x, y} = {x: 0, y: 0}) {
    return [x, y];
}

let [x, y] = m1({});
console.log(x, y);  // 0 0

[x, y] = m2({});
console.log(x, y);  // undefined undefined

/** rest参数 */
function add(array, ...items) {
    items.map(item => {
        array.push(item);
    });
}

var arr = [];
add(arr, 1, 2, 3, 4, 5);
console.log(arr);