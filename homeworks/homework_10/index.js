console.log('Task 1:');
//Напишите функцию, которая принимает два числа и возвращает большее значение. Вызов функции присвоить переменной и отобразить результат(переменную) в консоле

function comparisonOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

const res = comparisonOfTwoNumbers(2, 1);
console.log(res);

console.log('-------------------------------');
//Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. 
//Для отображения результа работы функции, вызовите её три раза с различными параметрами, результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль

console.log('Task 2:');

function returnFirstSymbolsN(string, n) {
    return string.slice(0, n);
}

const res1 = returnFirstSymbolsN("hello world", 5);
const res2 = returnFirstSymbolsN("i learn js", 2);
const res3 = returnFirstSymbolsN("Robert", 6);

console.log(res1);
console.log(res2);
console.log(res3);

console.log('-------------------------------');
//Напишите функцию, которая принимает массив и элемент, а затем возвращает true, если элемент присутствует в массиве, 
//и false в противном случае (если есть повторения заданного элемента в массиве, то на задачу это никак не влияет).
// Результат вызова функции отобразите в консоле 
console.log('Task 3:');

function containsElementInArray(arr, elementForFound) {
    let found = false;
    arr.forEach(function (element) {
        if (element === elementForFound) {
            found = true;
        }
    });
    return found;
}

const array = [1, 2, 3, 3, 4, 5];
const elementForFound = 3;

console.log(containsElementInArray(array, elementForFound));
console.log(containsElementInArray(array, 7));

console.log('-------------------------------');
//Есть массив чисел - отсортировать его методом пузырька.

console.log('Task 4*:');

function bubbleSort(arr) {
    let iterations = 0;                                //для подчета итераций
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            iterations++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Количество итераций:", iterations);   // Выводим количество итераций
    return arr;
}

let arrForSort = [3, 2, 6, 1, 5, 4];
console.log("Исходный массив:", arrForSort);
console.log("Отсортированный массив:", bubbleSort(arrForSort));

console.log('--------------------------------');

//var2 с промежуточными итерациями
function bubbleSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log("Итерация " + (i * (arr.length - 1) + j + 1) + ":", arr);
        }
    }
    return arr;
}

let arrForSort2 = [3, 2, 6, 1, 5, 4];
console.log("Исходный массив:", arrForSort2);
console.log("Отсортированный массив:", bubbleSort2(arrForSort2));



