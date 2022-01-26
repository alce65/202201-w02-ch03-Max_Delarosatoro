import { length } from './length.js';
import { push } from './push.js';

export const shift = (array) => {
    const firstElement = array[0];
    let lastElements = [];

    for (let i = 1; i < length(array); i++) {
        push(lastElements, array[i]);
    }

    array.length = 0;

    for (let i = 0; i < length(lastElements); i++) {
        push(array, lastElements[i]);
    }

    console.log(array);

    return firstElement;
};

const oldArray = [0, 1, 2, 3, 4, 5];

console.log(shift(oldArray));
