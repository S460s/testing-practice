const calculator = require('../src/calculator');

describe('Calculate basic exercises', () => {
	test('Add', () => {
		expect(calculator(2, 2, 'add')).toBe(4);
	});

	test('Subtract', () => {
		expect(calculator(5, 3, 'sub')).toBe(2);
	});

	test('Multiply', () => {
		expect(calculator(5, 5, 'mul')).toBe(25);
	});

	test('Divide', () => {
		expect(calculator(36, 6, 'div')).toBe(6);
	});
});
