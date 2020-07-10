/**
 *
 * A function that takes an array and some other 
 * arguments then removes the other arguments from
 * that array
 * 
 * @param {Array} arr - the list of values to check
 * @param {object} items - the list of items to filter
 * @returns {Array} - the filtered list of values
 *
 * @example
 *
 * const filterList = removeFromArray([1, 2, 3, 4], 3, "tacos");
 * console.log(filterList); // [1,2,4]
 *
 */
const removeFromArray = (arr, ...items) => {
    let arrRet = [];
    let arrItems = Array.from(items);
    for (let value of arr) {
        let found = false;
        for (item of arrItems) {
           if (value === item) {
               found = true;
           }
        }
        if (!found) {
            arrRet.push(value);
        }
    }
    return arrRet;
};

module.exports = removeFromArray
 