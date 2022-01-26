import { length } from './length.js';

export const reduce = (array, reducerFunction) => {
    let previousValue = null;
    let currentValue = null;
    for (let i = 0; i < length(array); i++) {
        if (i === 0) {
            previousValue = array[i];
        } else {
            currentValue = array[i];
            previousValue = reducerFunction(previousValue, currentValue);

            console.log(previousValue);
        }
    }

    return previousValue;
};

const array = [1, 2, 3, 4, 5];
const reducer = (previousValue, currentValue) => previousValue - currentValue;

console.log(array.reduce(reducer));
