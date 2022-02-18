const { fizzbuzz } = require('./fizzbuzz');

describe('Test fizzbuzz algorithm', () => {
    test('Should return 1 if value is 1', () => {
        const result = fizzbuzz(1);
        expect(result).toBe(1);
    });
    test('Should return "fizz" if value is 3', () => {
        const result = fizzbuzz(3);
        expect(result).toBe('fizz');
    });
    test('Should return "fizz" if value is a multiple of 3', () => {
        const result = fizzbuzz(6);
        expect(result).toBe('fizz');
    });
    test('Should return "buzz" if value is 5', () => {
        const result = fizzbuzz(5);
        expect(result).toBe('buzz');
    });
    test('Should return "buzz" if value is a multiple of 5', () => {
        const result = fizzbuzz(5);
        expect(result).toBe('buzz');
    });
    test('Shoul return "fizzbuzz" if value is a multiple of 3 and 5', () => {
        const result1 = fizzbuzz(15);
        const result2 = fizzbuzz(60);
        expect(result1).toBe('fizzbuzz');
        expect(result2).toBe('fizzbuzz');
    });
});
