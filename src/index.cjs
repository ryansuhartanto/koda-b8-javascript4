const PI = 22 / 7;

const calculate = require("./utils");

/**
 * @param {number} r
 * @returns {number}
 */
function keliling(r) {
	return PI * r * r;
}

/**
 * @param {number} r
 * @returns {number}
 */
function luas(r) {
	return PI * r * 2;
}

console.log(calculate(keliling, 7));
console.log(calculate(luas, 7));
