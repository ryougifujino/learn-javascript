function* foo() {
    yield 1;
    yield 2;
    return 3;
}

function* bar() {
    let f = yield* foo();
    console.log(f);
}

for (let b of bar()) {
    console.log(b);
}