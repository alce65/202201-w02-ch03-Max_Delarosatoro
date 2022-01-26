import { push } from './push.js';

const oldArray = [0, 1, 2, 3, 4, 5];
const newElement = 6;
const newArray = [0, 1, 2, 3, 4, 5, 6];

describe('Given the push function', () => {
    describe('When a valid array and a new element is passed', () => {
        test('Then it should return a new array with the new element', () => {
            expect(push(oldArray, newElement)).toEqual(newArray);
        })
    })
})
