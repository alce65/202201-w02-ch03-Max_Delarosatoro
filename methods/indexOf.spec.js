import { indexOf } from './indexOf';

const array = [1, 2, 3, 4, 5];
const checkValue = 5;
const checkValue2 = 6;

describe('Given the indexOf function', () => {
    describe('When given a valid array and value to check', () => {
        test('Should return the index of the first element it finds that is the same as the value to check', () => {
            expect(indexOf(array, checkValue)).toEqual(4);
        });

        test('Should return -1 if it does not finds the item in the array', () => {
            expect(indexOf(array, checkValue2)).toEqual(-1);
        });
    });
});
