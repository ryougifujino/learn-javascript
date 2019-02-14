/** 扩展运算符 */
const FIXED_NUMBER_ARRAY = [1, 2, 3, 4, 5];

function add(...numbers) {
    return numbers.reduce((pn, cn) => pn + cn);
}

console.log.call(null, add(...FIXED_NUMBER_ARRAY));

// 复制数组
const a1 = [1, 2];
const a2 = [...a1];
const [...a3] = a1;
console.log(a2, a3, a1 === a2, a1 === a3);

// 合并数组
const a = [...a1, ...a2, ...a3];
console.log(a);

// 与解构赋值结合
const [first, ...rest] = [1, 2, 3, 4];
console.log(first, rest);

/** Array.from() */
let arrayLike = {
    0: 'a',
    1: 'b',
    length: 2
};
var arr1 = [].slice.call(arrayLike);
let arr2 = Array.from(arrayLike);
console.log(arr1, arr2);

/** Array.of() */
console.log(Array.of(1, 2, 3));

/**数组实例的 entries()，keys() 和 values() */
for (let [index, value] of ['a', 'b'].entries()) {
    console.log(index, value);
}
