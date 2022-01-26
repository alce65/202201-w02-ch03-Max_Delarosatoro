import { find } from './find.js';

const array = [1, 2, 3, 4, 5];
const lessThanFive = (element) => element < 5;
const biggerThanFive = (element) => element > 5;

describe('Given the find function', () => {
    describe('When passing a valid array and conditional function', () => {
        test('It should return the first value that meets the condition', () => {
            expect(find(array, lessThanFive)).toEqual(1);
        });

        test('It should return undefined if no elements meet the condition', () => {
            expect(find(array, biggerThanFive)).toEqual(undefined);
        });
    });
});
