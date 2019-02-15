/** Promise.all() */
function getJSON(url) {
    return new Promise((resolve, reject) => {
        if (url.includes('post5')) {
            reject(new Error(url));
        } else {
            resolve(url);
        }
    });
}

const promises = [1, 2, 3, 4, 5].map(index => getJSON(`post${index}`));

Promise.all(promises.slice(0, promises.length - 1))
    .then(result => console.log(result))
    .catch(error => console.error(error));

Promise.all(promises)
    .then(result => console.log(result))
    .catch(error => console.error(error));
