import { reduce } from './reduce';

const array = [1, 2, 3, 4, 5];
const reducer1 = (previousValue, currentValue) => previousValue + currentValue;
const answer1 = 15;

const reducer2 = (previousValue, currentValue) => previousValue - currentValue;
const answer2 = -13;

describe('Given the reduce function', () => {
    describe('When it is passed a valid array and reducer function', () => {
        test('It should return the result of applying the reducer calculation on all of the array elements', () => {
            expect(reduce(array, reducer1)).toEqual(answer1);
        });

        test('It should return the result of applying the reducer calculation on all of the array elements', () => {
            expect(reduce(array, reducer2)).toEqual(answer2);
        });
    });
});
