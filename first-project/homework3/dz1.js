// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. Выведите результат с помощью console.log.

let n = -3;
let m = -10;
let count = 42;
let array = [];

let range = Math.abs(m-n);
// let numberInRange = Math.round(Math.random() * range);
let min = Math.min(n,m);
// let num = min + numberInRange;

let numberInRange;
let num;
// let x = array.toString();

for (let i = 0; i < count; i++) {
    numberInRange = Math.round(Math.random() * range);
    num = min + numberInRange;
    array.push(num);
    // console.log('Цифра в массиве ' + num);
}

// console.log(array);
console.log('[' + array.toString() + ']');


//array[i] = i;

// console.log(num);

// while (array.length < count) {
//     array.push(num);
// }
// console.log(array);


// let length = array.length;
// array.length = count;

// for (let length = 0; length < count; ++length) {
//     array.push(num);
//     console.log(array);
// }

// for (let i = 0; i < count; i++) {
//     if (array.length < count) {
//         array.push(num);
//     } 
//     console.log(array);
// }

// for (let i = 0; i < count; i++) {
//     if (array.length < count, ++num) {
//         array.push(num);
//     } 
// }
// console.log(array);


// for (let i = 0; i < count; i++) {
//     if (array.length < count) {
//     array.push(num);}
// }
// console.log(array);


// for (; num < m; num++) {
//     if (array.length < count) {
//     array.push(num);}
// }
// console.log(array);

// for (let i = 0; i < count; i++) {
//     if (array.length < count) {
//         array[num] = num;
//         array.push(num);
//     }
// }
// console.log(array);