/** Get series methods */
function leftDays() {
    var now = new Date();
    var end = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
    var msPerDay = 1000 * 60 * 60 * 24;
    return Math.round((end - now) / msPerDay);
}

console.log(leftDays());
