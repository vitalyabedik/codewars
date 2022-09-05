const sumTwoSmallestNumbers = (numbers) =>
    numbers
        .sort((a, b) => a - b)
        .splice(0, 2)
        .reduce((acc, item) => acc + item, 0);

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
