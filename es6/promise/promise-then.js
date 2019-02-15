/** Promise.prototype.then() */
function getJSON(url) {
    return new Promise(resolve => {
        switch (url) {
            case 'a':
                setTimeout(() => resolve('b'), 1000);
                break;
            case 'b':
                setTimeout(() => resolve('c'), 2000);
                break;
        }
    });
}

getJSON('a')
    .then(result => getJSON(result))
    .then(result => console.log(result));
