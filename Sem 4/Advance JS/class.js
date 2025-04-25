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

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   greet() {
//     console.log("Hello " + this.firstName + " " + this.lastName);
//   }
// }
// Person.prototype.introduce = function () {
//   console.log("Hi, I am " + this.firstName + " " + this.lastName);
// };

// Person.prototype.favoriteColor = "Blue";

// let person1 = new Person("John", "Doe");
// person1.introduce();
// console.log(person1.favoriteColor);
