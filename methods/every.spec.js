import { every } from './every.js';

const array = [1, 2, 3, 4, 5];
const isNumber = (element) => typeof element === 'number';
const lessThanSix = (element) => element < 6;

describe('Given the every function', () => {
    describe('When passing a valid array and condition', () => {
        test('It should return true if at least all elements in the array meet the condition', () => {
            expect(every(array, isNumber)).toEqual(true);
        });

        test('It should return true if at least all elements in the array meet the condition', () => {
            expect(every(array, lessThanSix)).toEqual(true);
        });
    });
});
