import { join } from './join.js';

const array1 = [1, 2, 3, 4, 5];
const joinParameter1 = '';
const expectedResult1 = '12345';

const joinParameter2 = ' ';
const expectedResult2 = '1 2 3 4 5';

const joinParameter3 = '-';
const expectedResult3 = '1-2-3-4-5';

describe('Given the join function', () => {
    describe('When given a valid array and a join parameter', () => {
        test('It should return a string with all the array items joined with the parameter in between', () => {
            expect(join(array1, joinParameter1)).toEqual(expectedResult1);
        });

        test('It should return a string with all the array items joined with the parameter in between', () => {
            expect(join(array1, joinParameter2)).toEqual(expectedResult2);
        });

        test('It should return a string with all the array items joined with the parameter in between', () => {
            expect(join(array1, joinParameter3)).toEqual(expectedResult3);
        });
    });
});
