/**
 * This function returns an array of numbers from the specified start to finish counting up
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} finish - The ending number of the range (inclusive).
 * @returns {Array<number>} - An array containing numbers from start to finish.
 *
 * Usage:
 * const numbers = returnNumbers(2, 7);
 * console.log(numbers); // [2, 3, 4, 5, 6, 7]
 * const numbers = returnNumbers(10, 11);
 * console.log(numbers); // [10, 11]
 * const numbers = returnNumbers(5, 5);
 * console.log(numbers); // [5]
 */
function returnNumbers(start, finish) {
    const numArr = []
    for (let i = start; i <= finish; i++) {
        numArr.push(i)
    }
    return numArr
}


/**
 * This function sums up all the values in an array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number} - The sum of all numbers in the array.
 *
 * Usage:
 * const total = sumArray([1, 2, 3]); // total will be 6
 * const anotherTotal = sumArray([-1, -2, 3]); // anotherTotal will be 0
 */

function sumArray(array) {
    let sum = 0
    for (number of array) {
        sum = sum + number
    }
    return sum
}

/**
 * This function adds a new element to the end of an array.
 *
 * @param {Array} arr - The array to which the element will be added.
 * @param {any} elem - The element to be added to the array.
 * @returns {Array} - The updated array with the new element.
 *
 * Usage:
 * const myArray = [1, 2, 3];
 * const updatedArray = pushElement(myArray, 4); // updatedArray will be [1, 2, 3, 4]
 */
function pushElement(arr, elem) {
    arr.push(elem)
    return arr
}


/**
 * This function removes all instances of a specific value from an array.
 *
 * @param {number[]} array - An array of numbers.
 * @param {number} valueToRemove - The value to remove from the array.
 * @returns {number[]} - A new array with all instances of the value removed.
 *
 * Usage:
 * const numbers = [1, 2, 3, 2, 4, 2, 5];
 * const filtered = removeValue(numbers, 2); // filtered will be [1, 3, 4, 5]
 */
function removeValue(array, valueToRemove) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== valueToRemove) {
            newArr.push(array[i])
        }
    }
    return newArr
    }