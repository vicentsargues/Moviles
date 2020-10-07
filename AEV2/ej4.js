const isBelowThreshold = (currentValue) => currentValue > 10;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));