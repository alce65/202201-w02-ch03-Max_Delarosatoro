import { includes } from './includes';

const array = [1, 2, 3, 4, 5];
const checkValue = 3;
const checkValue2 = 6;

describe('Given the includes function', () => {
    describe('When given a valid array and check value', () => {
        test('It should return true if the value is found in the array', () => {
            expect(includes(array, checkValue)).toEqual(true);
        });
        test('It should return false if the value is not found in the array', () => {
            expect(includes(array, checkValue2)).toEqual(false);
        });
    });
});
