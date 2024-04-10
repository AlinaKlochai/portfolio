//Задача 1
console.log('Задача 1:');
//Напишите программу для удвоения каждого значения в массиве и вывода результата в консоль
const arr1 = [2, 4, 6, 8, 10];

let doubleNumbers = [];

for (let i = 0; i < arr1.length; i++) {
    doubleNumbers.push(arr1[i] * 2);
}


console.log(doubleNumbers);

//Задача 2
console.log('--------------------------------');
console.log('Задача 2:');
//поменять местами первое и последнее число
const arr2 = [11, 22, 33, 44, 55];
const lastIndex = arr2.length - 1;
console.log(lastIndex);

for (let i = 0; i < arr2.length / 2; i++) {
    // Сохраняем значение первого элемента
    const temp = arr2[i];
    // Заменяем первый элемент последним
    arr2[i] = arr2[lastIndex - i];
    // Заменяем последний элемент сохраненным значением
    arr2[lastIndex - i] = temp;
}

console.log(arr2);

//Задача 3

console.log('--------------------------------');
console.log('Задача 3:');

const arr3 = [1, 2, 5, 4, 6, 7, 3];
let element = false;
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === 5) {
        element = true;
        break;
    }
}

if (element) {
    console.log("5 Найдено");
} else {
    console.log("5 Отсутствует");
}

//нет числп 5 в массиве
const arr3Not = [1, 2, 4, 6, 7, 3];
let elementNot = false;
for (let i = 0; i < arr3Not.length; i++) {
    if (arr3Not[i] === 5) {
        elementNot = true;
        break;
    }
}

if (elementNot) {
    console.log("5 Найдено");
} else {
    console.log("5 Отсутствует");
}


//Задача 4
//посчитать среднее арифметическое массива
console.log('--------------------------------');
console.log('Задача 4:');

const arr4 = [10, 15, 20, 25, 30];

function avarage(arr4) {
    let sum = 0;
    for (let i = 0; i < arr4.length; i++) {
        sum += arr4[i];

    }
    return sum / arr4.length;
}

console.log('Среднее арифметическое заданного массива: ',avarage(arr4));

