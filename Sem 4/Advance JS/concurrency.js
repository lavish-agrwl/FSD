// Callbacks
// function doSomething(callback) {
//     callback();
// }
// function sayHi() {
//     console.log("Hi!");
// }
// doSomething(sayHi);


// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("You got a ${grade}! Excellent!");
//             break;
//         case grade == "B":
//             console.log("You got a ${grade}! Well Done!");
//             break;
//         case grade == "C":
//             console.log("You got a ${grade}! Average!");
//             break;
//         case grade == "D":
//             console.log("You got a ${grade}! Poor!");
//             break;
//         default:
//             console.log("You got a ${grade}! What!");
//     }
// }
// function getGrade(score, callback){
//     let grade;
//     switch(true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(87.5, judge); // Good!

// setInterval(encourage, 500)
// function encourage() {
//     console.log("You can do it!");
// }

// let promise = new Promise((resolve, reject) => {
//     let x = 20;
//     if (x > 10) {
//         resolve(x);
//     }
//     else {
//         reject("x is less than 10");
//     }
// }
// );
// promise.then((value) => {
//     console.log("Success! x is " + value);
// }).catch((error) => {
//     console.log("Error: " + error);
// });
// const promise = new Promise((resolve, reject) => {
//     resolve("Success!");
// }
// ).then((value) => {
//     console.log(value);
//     return "we";
// }
// ).then((value) => {
//     console.log(value);
//     return "can";
// }
// ).then((value) => {
//     console.log(value);
//     return "chain";
// }
// ).then((value) => {
//     console.log(value);
//     return "promises";
// }
// ).then((value) => {
//     console.log(value);
//     return "together";
// }).then((value) => {
//     console.log(value);
// });


// 