const reverseString = require('../src/reverseString');

describe('Reverse a string', () => {
	test('reverse a single word', () => {
		expect(reverseString('Jest')).toBe('tseJ');
	});

	test('Reverse a sentence', () => {
		expect(reverseString('Hello World!')).toBe('!dlroW olleH');
	});

	test('Return false for non strings', () => {
		expect(reverseString([[2, 3, 4], 321])).toBe(false);
	});
});
