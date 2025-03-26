function add(numbers) {
    if (!numbers) return 0;

    let delimiter = ',';
    if (numbers.startsWith('//')) {
        delimiter = numbers.slice(2, numbers.indexOf('\n'));
        numbers = numbers.slice(numbers.indexOf('\n') + 1);
    }

    const numberArray = numbers
        .replace(new RegExp(`[\\n${delimiter}]`, 'g'), ',')
        .split(',')
        .map(Number);

    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed`);
    }

    return numberArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

module.exports = { add };