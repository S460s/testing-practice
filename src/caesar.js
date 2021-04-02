function caesar(string, shift, mode) {
	let decString = '';
	for (let i = 0; i < string.length; i++) {
		decString += String.fromCharCode(
			string.charCodeAt(i) + (mode === 'e' ? shift : -shift)
		);
	}
	return decString;
}

module.exports = caesar;
