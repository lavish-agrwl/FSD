// Parse a date string and get the milliseconds since January 1, 1970
let msec = Date.parse("March 21, 2012");

// Create a new Date object for a specific date
const d = new Date("01/01/2021");

// Create a new Date object for the current date and time
const d2 = new Date();

// Arrays for month and day names
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Log the year of the first date
console.log(d.getFullYear());

// Log the month names for both dates
console.log(months[d.getMonth()]);
console.log(months[d2.getMonth()]);

// Log the day names for both dates
console.log(days[d.getDay()]);
console.log(days[d2.getDay()]);

// Log the time in milliseconds since January 1, 1970 for both dates
console.log(d.getTime());
console.log(d2.getTime());

// Set specific date and time values for the first date
d.setDate(12);
d.setMonth(2); // March (months are 0-indexed)
d.setHours(12);
d.setMinutes(30);

// Log the updated first date
console.log(d);
