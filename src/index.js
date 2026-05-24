const PI = 22 / 7;

function calculate(cb, r) {
	if (typeof cb !== "function") {
		throw new Error("cb harus berupa function");
	}

	if (typeof r !== "number") {
		throw new Error("r harus berupa number");
	}

	return cb(r);
}

function keliling(r) {
	return PI * r * r;
}

function luas(r) {
	return PI * r * 2;
}

console.log(calculate(keliling, 7));
console.log(calculate(luas, 7));
