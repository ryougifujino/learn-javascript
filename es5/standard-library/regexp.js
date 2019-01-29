/** RegExp.prototype.test() */
var r = /s/g;   // g:search from last index
var s = '_s_s';

console.log(r.test(s));     // true
console.log(r.lastIndex);   // 2: starting point of next searching

console.log(r.test(s));     // true
console.log(r.lastIndex);   // 4

console.log(r.test(s));     // false
console.log(r.lastIndex);   // 0

console.log(r.test(s));     // true
console.log(r.lastIndex);   // 2

/** RegExp.prototype.exec() */
r = /wind(s)/;
var result = r.exec('Alert: winds is not wind!');
console.log(result[0]);     // winds
console.log(result[1]);     // s
console.log(result[2]);     // undefined
console.log(result.index);  // 7
console.log(result.input);  // Alert: winds is not wind!

// find all example
r = /a/g;
s = '++a--a++a--a++--a';
var match;
while (match = r.exec(s)) {
    console.log('#' + match.index);
}

/** String.prototype.match() */
var r1 = /[ab]/;
var r2 = /[ab]/g;
s = 'xaxbxaxb';
console.log(s.match(r1).length);    // 1
console.log(s.match(r2).length);    // 4

/** String.prototype.replace() */
console.log('hello world'.replace(/(\w+)\s(\w+)/, "$2 $1"));
console.log('abc'.replace('b', "[$`-$&-$']"));
console.log('1 a 2 b'.replace(/[0-9]/g, function (match) {
    return match * 2;
}));

/** m Modifier */
console.log(/b$/.test('ab\nc'));    // false
console.log(/b$/m.test('ab\nc'));   // true

/** Group match */
console.log('abc'.match(/(.)b/));   // ['ab', 'a']
console.log(/(.)a\1/.test('bab'));          // true: (same)a(same)
console.log(/((.)a)\1\2/.test('babab'));    // true

/** Non-capturing group (?:x) */
console.log(/(?:.)b(c)/.exec('abc'));   // ['abc', 'c']

/** Positive look-ahead x(?=y) */
// b is in front of c
console.log('abc'.match(/b(?=c)/)); // ['b']

/** Negative look-ahead x(?!y) */
// b is not in front of d
console.log('abc'.match(/b(?!d)/)); // ['b']
