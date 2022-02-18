Number.prototype.isDivisibleBy = function(div) {
    return this.valueOf() % div === 0;
};

function fizzbuzz(num) {
    if (num.isDivisibleBy(3) && num.isDivisibleBy(5)) {
        return 'fizzbuzz';
    }
    if (num.isDivisibleBy(3)) {
        return 'fizz'
    }
    if (num.isDivisibleBy(5)) {
        return 'buzz';
    }
    return num;
}

module.exports = {
    fizzbuzz,
};
