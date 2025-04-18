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

// function addTwoNumbers(x, y) {
//     return(x + y);
// }
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

// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);


// function addTwoNumbers(x,y){
//     return x+y; }
// let resultArr=[];
// for(let i=0; i<10; i++){
//     let result=addTwoNumbers(i,2*i);
//     resultArr.push(result);}

// console.log(resultArr);

// RETURNING WITH ARROW FUNCTION

// let addTwoNumbers=(x,y) => x+y;
// let result = addTwoNumbers(5,3);
// console.log(result);

// let addTwoNumbers=(x,y) => {
//     console.log("Adding.....");
//     return x+y;
// }


// function testAvailablity(x) {
//     console.log("Available here", x);
// }
// testAvailablity("Hello World!");
// console.log("Not available here", x);


// function testAvailability() {
//     let x = "Hello World!";
//     console.log("Available here", x);
// }
// testAvailability();
// console.log("Not available here", x);


// function doingStuff() {
//     if (true) {
//         let x = "Hello World!";
//     }
//     console.log(x);
// }
// doingStuff();
// function doingStuff() {
//     if (true) {
//         var x = "Hello World!";
//     }
//     console.log(x);
// }
// doingStuff();
// function doingStuff() {
//     if (true) {
//         const x = "Hello World!";
//     }
//     console.log(x);
// }
// doingStuff();


// let globalVar = "I am a global variable";
// console.log(globalVar);
// function testScope() {
//     console.log(globalVar);
// }
// testScope();

// (function () {
//     console.log("IIFE");
// })();

// (() => {
//     console.log("IIFE Arrow Function");

// })();

// function logRecuursive(nr)
// {
//     console.log("starting function", nr);
//     if (nr > 0)
//     {
//         logRecuursive(nr - 1);
//     } else {
//         console.log("Recursion ended");
//     }
//     console.log("ending function", nr);
// }

// logRecuursive(3)

// function outerFunction(nr){
//     console.log("Outer function");
//     innerFunction(nr);
//     function innerFunction(x){
//         let z = 10;
//     }
//     console.log("Not Accesible", z)
// }
// outerFunction()


// doFlexibleStuff(functionVariable());

// let youGotThis = function() {
//     console.log("You got this!");
// }
// setTimeout(youGotThis, 2000);

// setInterval(youGotThis, 2000);

// let val = 10;
// function tester(val) {
//     val += 10;
//     if(val  < 100) {
//         return tester(val);
//     }
//     return val;
// }
// val = tester(val);
// console.log(val);

// let testFunction = function() {
//     console.log("Hello World!");
// }();
// testFunction()



// (function(firstName) {
//     console.log("Hello " + firstName);
// })( "John");

// let test = (num) => num + 5;
// console.log(test(10));

// var addFive1 = function addFive1(num) {
//     return num + 2;
// };
// let addFive2 = (num) => num + 2;
// console.log(addFive1(14));

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet() {
//         console.log("Hello " + this.firstName + " " + this.lastName);
//     }
// }
// let person1 = new Person("John", "Doe");
// person1.greet();

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName, lastName){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }
//     greet() {
//         console.log("Hello " + this.firstName + " " + this.lastName);
//     }
// }
// let person1 = new Person("John", "Doe");
// person1.greet();

// class Person {
// //   #firstName;
// //   #lastName;
//   constructor(firstName, lastName) {
//     if(firstName.startsWith("M")){
//         this.firstName = firstName;
//     }
//     else{
//         this.firstName = "M" + firstName;
//     }
//     this.lastName = lastName;
//   }
//   greet() {
//     console.log("Hello " + this.firstName + " " + this.lastName);
//   }
// }
// let person1 = new Person("John", "Doe");
// person1.greet();

// class Vehicle {
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     start() {
//         console.log("Starting vehicle...");
//     }
//     stop() {
//         console.log("Stopping vehicle...");
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(make, model, year, color) {
//         super(make, model, year, color);
//         this.type = "Motorcycle";
//     }
//     start() {
//         console.log("Starting motorcycle...");
//     }
//     stop() {
//         console.log("Stopping motorcycle...");
//     }
// }

// let motorcycle1 = new Motorcycle("Harley Davidson", "Street 750", 2020, "Black");
// console.log(motorcycle1.color);
// motorcycle1.start();

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        console.log("Hello " + this.firstName + " " + this.lastName);
    }
}
Person.prototype.introduce = function() {
    console.log("I am " + this.firstName + " " + this.lastName);
}

Person.prototype.favoriteColor = "Blue";

let person1 = new Person("John", "Doe");
person1.introduce();
console.log(person1.favoriteColor);