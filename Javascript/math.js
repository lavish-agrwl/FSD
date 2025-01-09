// Rounds a number to the nearest integer
console.log(Math.round(2.6));


// Rounds a number up to the next largest integer
console.log(Math.ceil(2.6));
console.log(Math.ceil(-4.2));


// Rounds a number down to the next smallest integer
console.log(Math.floor(2.6));


// Truncates the decimal part of a number
console.log(Math.trunc(2.6));


// Returns the sign of a number, indicating whether the number is positive, negative or zero
console.log(Math.sign(3));
console.log(Math.sign(-3));
console.log(Math.sign(0));

// abs() Returns the absolute value of a number
console.log(Math.abs(-4.7));
console.log(Math.abs(4.7));

// Returns maximum or minimum value
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.min(0, 150, 30, 20, -8, -200));

// Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Random number between 0 and 100
console.log(Math.floor(Math.random() * 101));

// Logarithm of a number
console.log(Math.log(8));
console.log(Math.log10(100));
console.log(Math.log2(8));

let d = new Date();
console.log(Number(d));
