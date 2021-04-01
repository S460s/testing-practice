function reverseString(string) {
	if (typeof string !== 'string') return false;
	let reversedArr = string.split('');
	let revStr = '';
	for (let i = 1; i <= string.length; i++) {
		revStr += reversedArr[string.length - i];
	}

	return revStr;
}

module.exports = reverseString;
