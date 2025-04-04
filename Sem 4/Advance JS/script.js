// function sayHello() {
//     let name = prompt("What is your name?");
//     console.log("Hello, " + name + "!");
// }
// sayHello();

// let varContainingFunction = function() {
//     let varInFunction = 'I am a variable in a function';
//     console.log(varInFunction);
// }
// varContainingFunction();

// function testr(para1, para2) {
//     return(para1 + " " + para2);
// }
// const arg1 = "Hello";
// const arg2 = "World";
// testr(arg1, arg2);

// let var1= prompt("Enter a number: ");
// let var2= prompt("Enter another number: ");
// console.log("The sum of " + var1 + " and " + var2 + " is: " + (parseInt(var1) + parseInt(var2)));

// function tester(para1, para2) {
//     return (para1 + " " + para2);
// }
// const arg1 = "Hello";
// const arg2 = "World";
// console.log(tester(arg1, arg2));

//Default arguments are always the trailing arguments.

// addTwoNumbers = (a, b = 5) => {
//     return a + b;
// }
// console.log(addTwoNumbers(3));
// console.log(addTwoNumbers(3, 4));
// console.log(addTwoNumbers(3, 4, 5));

// const doingStuff = x => console.log(x);
// doingStuff("Hello World!");

// let addTwoNumbers = (x, y) => console.log(x + y);
// addTwoNumbers(5, 10);

// const arr = ["squirrel", "rabbit", "fox", "deer", "bear"];
// arr.forEach((animal) => console.log(animal));

//Spread operator
// let spread = ['some', 'array', 'values'];
// let message = ['This', 'is', 'a', 'message', 'and', spread];
// let message2 = ['This', 'is', 'a', 'message', 'and', ...spread];
// console.log(message);
// console.log(message2);

function addTwoNumbers(x, y) {
    return(x + y);
}
// let arr = [5, 10];
// addTwoNumbers(...arr);

// function addFourNumbers(a, b, c, d) {
//     return a + b + c + d;
// }
// let arr1 = [5, 9];
// let arr2 = [10, 15];
// console.log(addFourNumbers(...arr1, ...arr2));

// function someFunction(para1, ...para2) {
//   console.log(para1 + " " + para2);
// }
// someFunction("Hello", "World", "this", "is", "a", "test");
// someFunction();

let resultArr = [];
for (let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, 2*i);
    resultArr.push(result);
}
console.log(resultArr);
