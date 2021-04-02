const caesar = require('../src/caesar');

describe('Caesar Cipher Encryption', () => {
	test('letter', () => {
		expect(caesar('a', 1, 'e')).toBe('b');
	});

	test('word', () => {
		expect(caesar('Hello', 1, 'e')).toBe('Ifmmp');
	});

	test('Large Shift', () => {
		expect(caesar('Hello World.', 321, 'e')).toBe('ƉƦƭƭưšƘưƳƭƥů');
	});

	test('Sentence', () => {
		expect(caesar('Hello World.', 1, 'e')).toBe('Ifmmp!Xpsme/');
	});

	test('Random chars', () => {
		expect(caesar('12312WE##123!@#', 3, 'e')).toBe('45645ZH&&456$C&');
	});
});

describe('Caesar Cipher Decryption', () => {
	test('letter', () => {
		expect(caesar('b', 1, 'd')).toBe('a');
	});

	test('word', () => {
		expect(caesar('Ifmmp', 1, 'd')).toBe('Hello');
	});

	test('Sentence', () => {
		expect(caesar('Ifmmp!Xpsme/', 1, 'd')).toBe('Hello World.');
	});

	test('Random chars', () => {
		expect(caesar('45645ZH&&456$C&', 3, 'd')).toBe('12312WE##123!@#');
	});

	test('Large Shift', () => {
		expect(caesar('ƉƦƭƭưšƘưƳƭƥů', 321, 'd')).toBe('Hello World.');
	});
});
