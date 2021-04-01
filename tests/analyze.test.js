const analyze = require('../src/analyze');

describe('Analyze an array na return its averagem, min, max and length', () => {
	test('Test an array', () => {
		expect(analyze([2, 4])).toEqual({ av: 3, min: 2, max: 4, len: 2 });
	});

	test('Test an empty arr', () => {
		expect(analyze([])).toEqual([]);
	});
});
