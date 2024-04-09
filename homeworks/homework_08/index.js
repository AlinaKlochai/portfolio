//задача 2
console.log('Задача 2');

let a = 1;
let b = 'hi';
let c = true;

console.log(a);
console.log(b);
console.log(c);
console.log('-----------------------');
console.log('Задача 3');

let one = 1;
let two = one;
one = 2;
console.log(one);
console.log(two);

console.log('-----------------------');
console.log('Опционально: 1.');

let animals = ["dog", "cat", "fish"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]); 
}

console.log('-----------------------');
console.log('Опционально: 2.');
//первый способ
for(let i = animals.length - 1; i >= 0; i--){
    console.log(animals[i]); 
}

console.log("-_-_-_-");
//второй способ
animals.reverse();
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]); 
}