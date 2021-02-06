/* 
Вычисляем  расстояние между двумя точками
Даны координаты x, y 2-x точек. Нужно вывести расстояние между ними.
Высясляем по теореме Пифагора 
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
    Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
));

проверка1
проверка2
проверка3