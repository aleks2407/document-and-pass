/**
 *
 * A function that returns a specific member of the fibonacci sequence
 * 
 * @param {Number} nr - the position of the number in the fibonacci sequence
 * @returns {Number} - the number of the fibonacci sequence
 *
 * @example
 * 
 * const num = fibonacci(25);
 * console.log(num); // 75025
 * 
 */
const fibonacci = (nr) => {
    let ret = 1;

    if (nr < 1) {
        ret = "OOPS";
    } else {
        let p1 = 1;
        let p2 = 1;
    
        for (let i=2; i<nr; i++) {
            ret = p1 + p2;
            p1 = p2;
            p2 = ret;
        }    
    }
    
    return ret;
}

module.exports = fibonacci
