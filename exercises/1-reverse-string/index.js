/**
 *
 * A function called `reverseString` that returns its input, reversed
 * 
 * @param {String} str - user's input to be reversed
 * @returns {String} - reversed user's input 
 *
 * @example
 * 
 * const revString = reverseString('hello there');
 * console.log(revString); // 'ereht olleh' 
 * 
 */

const reverseString = (str) => {
    let strRet = '';
    const arr = Array.from(str);
    for (let chr of arr) {
        strRet = chr + strRet;
    }
    return strRet;
}

module.exports = reverseString

