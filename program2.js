
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const num = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = num[s[i]];
        const val = num[s[i + 1]];

        if (val > curr) {
            result += val - curr;
            i++;
        } else {
            result += curr;
        }
    }

    return result;
};

module.exports = { romanToInt };
