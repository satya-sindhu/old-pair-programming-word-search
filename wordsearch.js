const transpose = require('./transpose.js')

const wordSearch = (letters, word) => { 
    if (letters !== []) {
        const horizontalJoin = letters.map(ls => ls.join(''))
        if (horizontalJoin.includes(word)) {
            return true;
        } else {
            const vertical = transpose(letters);
            const verticalJoin = vertical.map(ls => ls.join(''))
                if (verticalJoin.includes(word)) {
                    return true;
                } else {
                    return false;
                }
        }
    } else {
        return false;
    }
};


module.exports = wordSearch