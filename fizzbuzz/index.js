const { fizzbuzz } = require('./fizzbuzz');

for (let num = 1; num <= 100; num++) {
    console.log(`${num} => ${fizzbuzz(num)}`);
}