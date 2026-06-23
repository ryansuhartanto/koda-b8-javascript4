const PI = 22 / 7;

/**
 * @param {function(number): number} cb
 * @param {number} r
 * @returns {number}
 */
function calculate(cb, r) {
	if (typeof cb !== "function") {
		throw new Error("cb harus berupa function");
	}

	if (typeof r !== "number") {
		throw new Error("r harus berupa number");
	}

	const result = cb(r);

	if (typeof result !== "number") {
		throw new Error("cb harus me-return-kan number");
	}

	return result;
}

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
