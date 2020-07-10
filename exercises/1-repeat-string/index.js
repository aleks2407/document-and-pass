/**
 *
 * A function that simply repeats the string a given number of times
 * 
 * @param {String} str - user's input to be repeated
 * @param {Number} nr - the number of times it will be repeated
 * @returns {String} - user's input repeated number of times
 *
 * @example
 * 
 * const repeatString = repeatString('hey', 10);
 * console.log(repeatString); // 'heyheyheyheyheyheyheyheyheyhey' 
 * 
 */
const repeatString = (str, nr) => {
    let strRet = '';
    if ((typeof nr === 'number') && (nr>=0)) {
        for (let i=0; i<nr; i++) {
            strRet+=str;
        }
    } else {
        strRet = 'ERROR';
    }
    return strRet;
}

module.exports = repeatString
