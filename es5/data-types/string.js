var name = '阿波罗';
var base64Name = btoa(encodeURIComponent(name));
console.log(base64Name);
var originName = decodeURIComponent(atob(base64Name));
console.log(originName);
