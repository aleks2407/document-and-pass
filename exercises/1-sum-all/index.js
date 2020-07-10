/**
 *
 * A function that takes 2 integers and returns the sum of every number between(and including) them
 * 
 * @param {Number} nr1 - number 1, user's input
 * @param {Number} nr2 - number 2, user's input
 * @returns {Number} - summary of all the numbers between this number, including numbers that were input
 *
 * @example
 * 
 * const sum = sumAll(1, 4000);
 * console.log(sum); // 8002000 
 * 
 */
const sumAll = (nr1, nr2) => {
    let sum = 0;
    if ((typeof nr1 != 'number') || (typeof nr2 != 'number') || (nr1<0) || (nr2<0)) {
        sum = 'ERROR';        
    } else {
        let start;
        let end;
        if (nr1>nr2) {
            start = nr2;
            end = nr1;
        } else {
            start = nr1;
            end = nr2;
        }

        for (let i=start; i<=end; i++) {
            sum = sum + i;
        }
    }
    return sum;
}

module.exports = sumAll

