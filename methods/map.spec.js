import { map } from './map';

const array = [1, 2, 3, 4, 5];
const transformFunction = (element) => element * 2;
const expectedAnswer = [2, 4, 6, 8, 10];

const transformFunction2 = (element) => element * 3;
const expectedAnswer2 = [3, 6, 9, 12, 15];

describe('Given the map function', () => {
    describe('When given a valid array and transform function', () => {
        test('It should return a new array with all of the elements applied the transformation function', () => {
            expect(map(array, transformFunction)).toEqual(expectedAnswer);
        });

        test('It should return a new array with all of the elements applied the transformation function', () => {
            expect(map(array, transformFunction2)).toEqual(expectedAnswer2);
        });
    });
});
