import { length } from './length.js';

const testArray = [0, 1, 2, 3, 4, 5];

describe('Given the length function', () => {
    describe('When an array is passed', () => {
        test('Then it should return the array length', () => {
            expect(length(testArray)).toEqual(6);
        });
    });
});
