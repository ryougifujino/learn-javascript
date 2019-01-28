/** Math.random() */
function getRandomArbitrary(min, max) {
    return min + (max - min) * Math.random();
}

console.log(getRandomArbitrary(1.5, 6.5));

function getRandomInt(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

console.log(getRandomInt(1, 6));

function random_str(length) {
    var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
    ALPHABET += '0123456789-_';
    var str = '', i;
    for (i = 0; i < length; i++) {
        var rand = Math.floor(Math.random() * ALPHABET.length);
        str += ALPHABET.substring(rand, rand + 1);
    }

    return str;
}

console.log(random_str(6));