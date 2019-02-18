const {log} = console;

function* f() {
    console.log('start');
    for (let i = 0; true; i++) {
        let reset = yield i;
        if (reset) i = -1;
    }
}

let g = f();
log(g.next());
log(g.next());
log(g.next(true));
// 注意next的参数是“上一个”yield表达式的返回值。
// 第一次调用next，从最开始（中途打印start）一直到首次循环中的yield 0处，此时返回value为0的对象并暂停；由于没有
// 上一个yield语句，此时next中的参数（本例中为undefined）是何值都无任何作用。
// 第二次调用next，从暂停的yield 0处开始执行，由于这次的参数也为undefined，所以 reset 为undefined，进行第二次
// 循环，到yield 1处，此时返回value为1的对象并暂停。
// 第三次调用next，从暂停的yield 1处开始执行，由于这次的参数为true，按照“next的参数是上一个yield表达式的返回值”
// 这个原则，此时的 reset 的值变为true，继续执行，i变为-1；然后进行第三次循环，此时的i经过i++后变为0，然后停留
// 在yield 0处，并返回value为0的对象并暂停。