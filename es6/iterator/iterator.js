/** 默认 Iterator 接口 */
let iter = [1, 2][Symbol.iterator]();
console.log(iter.next(), iter.next(), iter.next());

for (let value of [1, 2][Symbol.iterator]()) {
    console.log(value);
}
