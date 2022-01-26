import { some } from './some.js';

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
const numberFive = (element) => element === 5;

describe('Given the some function', () => {
    describe('When passing a valid array and condition', () => {
        test('It should return true if at least one element in the array meets the condition', () => {
            expect(some(array, even)).toEqual(true);
        });

        test('It should return true if at least one element in the array meets the condition', () => {
            expect(some(array, numberFive)).toEqual(true);
        });
    });
});
