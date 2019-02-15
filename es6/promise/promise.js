const p1 = new Promise(((resolve, reject) => {
    setTimeout(() => void reject(new Error('fail')), 3000);
}));
const p2 = new Promise(resolve => {
    setTimeout(() => resolve(p1), 1000);
});
p2.then(result => console.log(result),
    error => console.error(error));
