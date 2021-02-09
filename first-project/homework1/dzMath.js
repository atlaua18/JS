// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log.

// let x1 = 8;
// let y1 = 1;

// let x2 = 5;
// let y2 = 1;

// let height = Math.abs(x2-x1);
// let width = Math.abs(y2-y1);

// console.log('Площадь = ', height * width);






// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

// let a = 13.123456789;
// let b = 2.123;
// let n = 5; // precision - точность

// console.log('Дробная часть a', Math.floor(a % 1 * Math.pow(10, n)));
// console.log('Дробная часть b', Math.floor(b % 1 * Math.pow(10, n)));

// let aNormalized = Math.floor(a % 1 * Math.pow(10, n));
// let bNormalized = Math.floor(b % 1 * Math.pow(10, n));

// console.log('Дробные части равны', aNormalized === bNormalized);
// console.log('Дробная часть первого числа больше', aNormalized > bNormalized);
// console.log('Дробная часть первого числа меньше', aNormalized < bNormalized);




// Написать генератор НЕЧЁТНЫХ случайных чисел в диапазоне между n и m включительно. Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log.

// let n = 2;
// let m = 5;

// // кол-во цифр, которые могут быть сгенерированы
// let range = Math.abs((m-n+1)/2);
// // округленное число от 0 до range
// let numberInRange = Math.round(Math.random() * range);
// // левая граница возможного числа (нижняя граница нашего числа)
// let min = Math.min(n,m);

// console.log((min/2 + numberInRange)*2+1);



// let n = 2;
// let m = 5;
 
// let min = Math.min(n, m);
// let max = Math.max(n, m);
 
// let maxmin = max - min;
 
// let number = Math.floor(Math.random() * maxmin / 2) * 2 + 1;
 
// console.log(number);

let n = 100;
let m = -5;

let range = Math.abs(m-n);
let numberInRange = Math.round(Math.random() * range);
let min = Math.min(n,m);
let num = min + numberInRange;

if (num % 2 === 1) {
    console.log(num);
} else if (num % 2 === - 1) {
    console.log(num);
} else {
    console.log('четное');
}