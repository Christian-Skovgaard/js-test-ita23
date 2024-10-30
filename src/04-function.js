/**
 * This function generates a birthday message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Message for the user in this format: Hey NAME, happy YEAR birthday!
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // "Hey Jack, happy 25 birthday!"
 */
function generateMessage(name, age) {
    return `Hey ${name}, happy ${age} birthday!`
}

/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
function strToArr (str) {
    const strArr = []
    for (let i = 0; i < str.length; i++) {
        strArr.push(str.charAt(i))
    }
    return strArr
}
function arrToStr (arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i].toString()
    }
    return str
}
function titleCase(sentence) {
    const strArr = strToArr(sentence)
    strArr[0] = strArr[0].toUpperCase()
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
            strArr[i+1] = strArr[i+1].toUpperCase()
        }
    }
    const newStr = arrToStr(strArr)
    return newStr
}

console.log(arrToStr(['h','e','j']))

/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
function sumOfRange(start, end) {
    let sum = 0
    for (let i = start; i <= end; i++) {
        sum = sum + i
    }
    return sum
}


/**
 * This function generates an acronym from the first letter of each word in a sentence, ignoring words with numbers.
 *
 * @param {string} sentence - The sentence to create an acronym from.
 * @returns {string} - The generated acronym.
 *
 * Usage:
 * const acronym = generateAcronym("Open 24 Hours a Day"); // acronym will be "OHAD"
 * const anotherAcronym = generateAcronym("Federal Bureau Investigation"); // anotherAcronym will be "FBI"
 */
//synes selv den ignorer numbers, men, du ved
function generateAcronym(sentence) {
    const strArr = strToArr(sentence)
    const acronymArr = []
    if (strArr[0] !== strArr[0].toUpperCase() || strArr[0] !== strArr[0].toLowerCase()) {
        acronymArr.push(strArr[0].toUpperCase())
    }
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' '  && (strArr[i+1] !== strArr[i+1].toUpperCase() || strArr[i+1] !== strArr[i+1].toLowerCase())) {
            acronymArr.push(strArr[i+1].toUpperCase())
        }
    }
    return arrToStr(acronymArr)
}


/**
 * This function counts consonants in a string, with lowercase counting as 1 and uppercase as 2.
 *
 * @param {string} str - The input string.
 * @returns {number} - The calculated "weighted" consonant count.
 *
 * Usage:
 * const consonantCount = countConsonantsWeighted("Hello World!"); // consonantCount will be 9
 * const anotherCount = countConsonantsWeighted("JavaScript"); // anotherCount will be 9
 */
function countConsonantsWeighted(str) {
    const strArr = strToArr(str)
    const capitalArr = ['a','e','i','o','u','A','E','I','O','U']
    for (let i = 0; i < strArr.length; i++) {
        for (char of capitalArr) {
            if (strArr[i] == char) {
                strArr[i] = undefined
            }
        }
    }
    let sum = 0
    for (elm of strArr) {
        if (elm !== undefined && elm !== elm.toUpperCase()) {
            sum++
        }
        else if (elm !== undefined && elm !== elm.toLowerCase()) {
            sum = sum + 2
        }
    }
    return sum
}



/*    let sum = 0
    const isCapital = (char) => {
        let isCapital = false
        for (capital of ['a','e','i','o','u','A','E','I','O','U']) {
            if (capital == char) {
                isCapital = true
            }
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (isCapital(str.charAt(i)) === false || str.charAt(i) !== str.charAt(i).toLowerCase()) {
            sum = sum + 2
        }
        if (isCapital(str.charAt(i)) === false || str.charAt(i) !== str.charAt(i).toUpperCase()) {
            sum = sum + 1
        }
    }
    return sum
}
*/