function capitalize(string) {
	if (typeof string !== 'string') return false;
	return `${string[0].toUpperCase()}${string.toLowerCase().slice(1)}`;
}

module.exports = capitalize;
