function analyze(arr) {
	if (arr.length === 0) return [];
	const av = arr.reduce((num, acc) => acc + num, 0) / arr.length;
	return { av, len: arr.length, max: Math.max(...arr), min: Math.min(...arr) };
}

module.exports = analyze;
