const { add } = require('../calculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add('1')).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add('10,20')).toBe(30);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2,3,4,5')).toBe(15);
    });

    test('should support newline as a delimiter', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('should handle multiple numbers and newlines', () => {
        expect(add('1\n2,3\n4')).toBe(10);
    });

    test('should throw an error when a negative number is provided', () => {
        expect(() => add('1,-2,3,-5')).toThrowError('Negative numbers not allowed');
    });

    test('should ignore numbers greater than 1000', () => {
        expect(add('2,1001')).toBe(2);
        expect(add('1000,1001')).toBe(1000);
    });

    test('should handle multiple delimiters correctly', () => {
        expect(add('//;\n1;2')).toBe(3);
        expect(add('//|\n5|6|7')).toBe(18);
    });
});