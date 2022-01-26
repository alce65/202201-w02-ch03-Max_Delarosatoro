import { findIndex } from './findIndex';

const array = [1, 2, 3, 4, 5];
const conditionalFunction = (element) => element === 3;
const expectedIndex = 2;
const conditionalFunction2 = (element) => element === 6;

describe('Given the findIndex function', () => {
    describe('When passed a valid array and conditional function', () => {
        test('It should return the index of the first item that satisfies the condition', () => {
            expect(findIndex(array, conditionalFunction)).toEqual(
                expectedIndex
            );
        });
        test('It should return the index of the first item that satisfies the condition', () => {
            expect(findIndex(array, conditionalFunction2)).toEqual(-1);
        });
    });
});
