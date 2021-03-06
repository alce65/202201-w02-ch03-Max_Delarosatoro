import { filter } from './filter.js';

const array = [1, 2, 3, 4, 5];
const biggerThanTwo = (element) => element > 2;
const biggerThanTwoAnswer = [3, 4, 5];

const biggerThanFive = (element) => element > 5;

describe('Given the filter function', () => {
    describe('When given a valid array and conditional function', () => {
        test('It should return the elements that pass the condition', () => {
            expect(filter(array, biggerThanTwo)).toEqual(biggerThanTwoAnswer);
        });

        test('It should return an empty array if no elements match the condition', () => {
            expect(filter(array, biggerThanFive)).toEqual([]);
        });
    });
});
