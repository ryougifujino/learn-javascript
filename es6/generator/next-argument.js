const {log} = console;

function* f() {
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
// 第一个next调用value得到0，并停留在i等于1的yield处，此时next参数即使设置了也无效（因为没有上一个yield）；
// 第二个next调用value得到1，因为有下一个next有参数true，所以yield 1这的reset被赋值为true，i被重置为-1。
// 然后停留在i等于0的yield处。
// 第三个next调用value得到0，并停留在i等于1的yield处。
// 这是根据断点运行结果后的理解。

// 或者这样理解：第一个next调用后执行到yield 0，value得到0，然后停下来；
// 第二个next调用从上次的yield 0处继续执行，然后执行到yield 1处，value得到1，然后停下来；
// 第三个next调用从上次的yield 1处继续执行，因为这次有参数true，所以reset的值变为true，i被重置为-1。然后
// 进行下一个循环i加1变为0，执行到yield 0处，value得到0。
// 这样理解起来更加自然。
