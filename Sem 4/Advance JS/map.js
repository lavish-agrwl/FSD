const fruits = new Map([
    ['apples', 500],
    ['bananas', 200],
    ['oranges', 300]
]);

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

let text = '';
// fruits.forEach((value, key) => {
//     text += `${key} = ${value}\n`;
// });

// for(const x of fruits.entries()) {
//     text += x + '\n';
// }

// for(const x of fruits.keys()) {
//     text += x + '\n';
// }

for(const x of fruits.values()) {
    text += x + '\n';
}
console.log(text);
