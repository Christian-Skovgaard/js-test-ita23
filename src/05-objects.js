/**
 * This function returns an object that has the properties: 'name', 'age', and 'city'.
 *
 * @returns {Object} - An object with properties 'name', 'age', and 'city'.
 *
 * Usage:
 * const person = createPersonObject();
 * // person might be { name: 'John Doe', age: 30, city: 'New York' }
 */
function createPersonObject() {
    const obj = {
        'name':'',
        'age': undefined,
        'city': ''
    }
    return obj
}


/**
 * This function returns the name of the given person object.
 *
 * @param {Object} person - The person object.
 * @returns {string} - The name of the person.
 *
 * Usage:
 * const personName = getPersonName({ name: 'John Doe', age: 30, city: 'New York' });
 * // personName will be 'John Doe'
 */
function getPersonName(person) {
    return person.name
}


/**
 * This function finds a person from an array of persons based on their name.
 *
 * @param {Object[]} persons - Array of person objects.
 * @param {string} name - Name of the person to be found.
 * @returns {Object} - The person object with the given name, or null if not found.
 *
 * Usage:
 * const john = findPersonByName([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }], 'John Doe');
 * console.log(john); // Outputs { name: 'John Doe', age: 30 }
 *
 */
function findPersonByName(persons, name) {
    for (person of persons) {
        if (person.name == name) {
            return person
        }
    }
}


/**
 * This function calculates the total age of all persons in an array.
 *
 * @param {Object[]} persons - Array of person objects.
 * @returns {number} - The total age of all persons.
 *
 * Usage:
 * const totalAge = getTotalAge([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }]);
 * // totalAge will be 55
 */
function getTotalAge(persons) {
    ageSum = 0
    for (person of persons) {
        ageSum = ageSum + person.age
    }
    return ageSum
}


/**
 * This function checks for duplicate email addresses in an array of users.
 *
 * @param {Object[]} users - An array of user objects with an email property.
 * @returns {boolean} - True if duplicate emails are found, otherwise false.
 *
 * Usage:
 * const users = [
 *   { email: 'alice@example.com' },
 *   { email: 'bob@example.com' },
 *   { email: 'alice@example.com' }
 * ];
 * const hasDuplicates = checkForDuplicateEmails(users); // true
 */
const users = [
    { email: 'alice@example.com' },
    { email: 'bob@example.com' },
    { email: 'alice@example.com' },
];

const obj = ['hello','yes']

function checkForDuplicateEmails(users) {
    const emailArr = []
    let hasDuplicates = false
    for (elm of users) {
        emailArr.push(elm.email)
    }
    for (email1 of emailArr) {
        let count = 0
        for (email2 of emailArr) {
            if (email2 == email1) {
                count + 1
            }
            if (count > 1) {hasDuplicates = true}
        }
    }
    return hasDuplicates
}