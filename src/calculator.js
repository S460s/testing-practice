const operations = {
	add(num1, num2) {
		return num1 + num2;
	},
	sub(num1, num2) {
		return num1 - num2;
	},
	div(num1, num2) {
		return num1 / num2;
	},
	mul(num1, num2) {
		return num1 * num2;
	},
};

function calculator(num1, num2, operation) {
	return operations[operation](num1, num2);
}

module.exports = calculator;
