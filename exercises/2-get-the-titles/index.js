/**
 *
 * @param {Array} arr - an array to be checked
 * @returns {Array} of strings - gets all the titles of the array and return them in a new array
 *
 * @example
 * 
 * const books = [{title: 'Book', author: 'Name'},{title: 'Book2', author: 'Name2'}]
 * getTheTitles(books);
 * console.log(books); // ['Book', 'Book2']
 */



const getTheTitles2 = (arr) => {
    const bookTitles = [];
    for (const item of arr) {
    let title = item.title;
    bookTitles.push(title);
   } 
   return bookTitles;
}

// Arrow function with MAP method
const getTheTitles3 = (arr) => {
    function getTitle(o) {
        return o.title;
    }
    
    return bookTitles = arr.map(getTitle);
}

// Arrow function with MAP method
const getTheTitles4 = (arr) => {
    return bookTitles = arr.map(o => o.title);
}

// Arrow function with MAP method
const getTheTitles = arr => arr.map(o => o.title);



module.exports = getTheTitles;
