function add(numbers) {
    if (!numbers) return 0;

    const numberArray = numbers.replace(/\n/g, ',').split(',');

    const negatives = numberArray.map(Number).filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error('Negative numbers not allowed');
    }

    return numberArray
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}
module.exports = { add };