const capitalize = require('../src/capitalize');

describe('Capitalize a string', () => {
	test('Capitalize a lowercase string', () => {
		expect(capitalize('jest')).toBe('Jest');
	});

	test('Capitalize upper case string', () => {
		expect(capitalize('JEST')).toBe('Jest');
	});

	test('Capitalize a sentence', () => {
		expect(capitalize('teSt seNtEnce.')).toBe('Test sentence.');
	});

	test('Capitalize not a string', () => {
		expect(capitalize(231)).toBe(false);
	});
});
