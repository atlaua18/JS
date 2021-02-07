// Вычисляем кол-во квартир в доме
// Дано кол-во подъездов, этажей и квартир на одном этаже
// Нужно вывести кол-во квартир в одном поъезде и во всем доме

// кол-во подъездов
let entrances = 4;
// кол-во этажей
let floors = 9;
//колво квартир на этаже
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log('Квартир в подъезде', flatsPerEntrance)

let flats = entrances * flatsPerEntrance;
console.log('Всего квартир в доме', flats);




// Пропорции для рецепта Кровавой Мэри
// Даны пропорции ингредиентов для КМ и объем напитка, который нужно получить. Вычислить нбх объем ингредиентов в этих данных

// ингредиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

// желаемый объем напитка
let volume = 500; 

//коэффициент для получения объема ингредиента
let k = (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

// сколько нужно водки для желаемого объема КМ
console.log(vodka * k);





// Вычисление дискриминанта и решения квадратного уравнения a*x*x + b*x + c = 0
// Даны параметры a, b, c для квардратного уравнения
// Нужно вывести возможные значения x этого уравнения

let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

//корень дискриминанта
let dRoot = Math.sqrt(d);
console.log('x1 = ', (-b + dRoot) / (2 * a));
console.log('x2 = ', (-b + dRoot) / (2 * a));





// Вычисляем n чисел ряда Фибоначчи
// Каждое следующее число - сумма двух предыдущих

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
    prevPrev = prev;
    prev = current;
    current += prevPrev;
    console.log(current);
}