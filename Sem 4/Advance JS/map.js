// const fruits = new Map([
//     ['apples', 500],
//     ['bananas', 200],
//     ['oranges', 300]
// ]);

// const fruits = new Map();
// fruits.set('apples', 500);
// fruits.set('bananas', 200);
// fruits.set('oranges', 700);
// console.log(fruits);
// console.log(fruits.get('apples'));
// console.log(typeof fruits);
// console.log(fruits instanceof Map);
// fruits.delete('apples');
// fruits.clear();
// console.log(fruits.size);
// console.log(fruits.has('apples'));

// let text = '';
// fruits.forEach((value, key) => {
//     text += `${key} = ${value}\n`;
// });

// for(const x of fruits.entries()) {
//     text += x + '\n';
// }

// for(const x of fruits.keys()) {
//     text += x + '\n';
// }

// for(const x of fruits.values()) {
//     text += x + '\n';
// }
// console.log(text);


// const apples = {name: 'apples'}
// const bananas = {name: 'bananas'}
// const oranges = {name: 'oranges'}
// const fruits = new Map();
// fruits.set(apples, 500);
// fruits.set(bananas, 200);

// const fruits = [
//     {name: 'apples', quantity: 500},
//     {name: 'bananas', quantity: 200},
//     {name: 'oranges', quantity: 700},
//     {name: 'grapes', quantity: 1000}
// ];

// function myFunction({quantity}) {
//     return quantity > 200 ? 'Ok' : 'Not Ok';
// }

// const result = Map.groupBy(fruits, myFunction);
// console.log(result);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

// let {firstName : name, lastName, age, country = "India"} = person;

// console.log(firstName); // ReferenceError: firstName is not defined
// console.log(name); // John
// console.log(lastName); // Doe


// let Myname = 'JohnDoe';
// let [a1, a2, a3, a4] = Myname;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);

// const fruits = ['apple', 'banana', 'orange', 'mango'];
// let [fruit1, , , fruit4] = fruits;
// console.log(fruit1);
// console.log(fruit4);

const fruits = ["apple", "banana", "orange", "mango"];
// let {[0]: fruit1, [2]: fruit3} = fruits;
// console.log(fruit1); // apple
// console.log(fruit3); // orange

// const numbers = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = numbers;
// console.log(a, b);

// let text = '';
// fruits.forEach((value, key) => {
//     text += `${key} = ${value}\n`;
// });
// console.log(text);

// let firstName = 'John';
// let lastName = 'Doe';
// [firstName, lastName] = [lastName, firstName]
// console.log(firstName, lastName);


// console.log(fruits.includes('Kiwi'));

// const arr = ["one", "two", "three", ];
// console.log(arr)

// const sparseArray = [1,,,4,5,,];
// console.log(sparseArray);

// const person = {
//     firstName: "John",
//     ,
//     lastName: "Doe",
//     age: 30
// }
// console.log(person);

