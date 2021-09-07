let persons = [
    { firstName: "Nastya", age: 25, occupation: "Frontend-developer" },
    { firstName: "Vitalik", age: 27, occupation: "Fullstuck" },
    { firstName: "Julia", age: 30, occupation: "Engineer" },
    { firstName: "Natalie", age: 22, occupation: "Designer" },
];

let arr = [0, "str", 1, true, 89, false];

//#region splice
// splice - добавлять, удалять и заменять
// Возвращает массив из удалённых элементов !!!!
// let newP = persons.splice(1, 1);
// console.log(newP); // {firstName: "Vitalik", age: 27, occupation: "Fullstuck"}

// let newP = persons.splice(0, 2, {name: "Olga"});
// console.log(persons) // заменил 2 первых на один {name: "Olga"}
//#endregion

//#region slice
// slice - возвращает новый массив(!), в который копирует элементы, начиная с индекса start и до end (не включая end !!!!)
// let newP = persons.slice(1, 2);
// console.log(newP);// вернет массив только с {firstName: "Vitalik", age: 27, occupation: "Fullstuck"}

// let newP = persons.slice(2, 4);
// console.log(newP); // вернет:
// [
//     {firstName: "Julia", age: 30, occupation: "Engineer"},
//     {firstName: "Natalie", age: 22, occupation: "Designer"}
// ]
//#endregion

//#region concat
// concat(argN) - создаёт новый массив, в который копирует данные из других массивов и дополнительные значения
// Если аргумент argN – массив, то все его элементы копируются. Иначе скопируется сам аргумент.
// let newP = persons.concat({firstName: "Olga", age: 29, occupation: "Artist"})
// console.log(newP); // вернет массив из 5ти объектов(4 старых + 1 новый)
//#endregion

//#region forEach
//forEach - позволяет запускать функцию для каждого элемента массива. всегда возвращает значение undefined !!!!!!!!!
// Результат функции (если она вообще что-то возвращает) отбрасывается и игнорируется.

// let newP = persons.forEach((el) => console.log(el)); // просто выведет все объекты, то есть элементы массива

// let newP = persons.forEach((el, i) => {
//     console.log(`${el.firstName}: ${el.age} лет`);
// });

//#endregion

//#region indexOf/lastIndexOf/includes
// 1) indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
// let newP = arr.indexOf('str'); //1
// let newP = arr.indexOf(1); // 2
// let newP = arr.indexOf(false); // 5
// let newP = arr.indexOf('bla'); // -1
// console.log(newP);

// 2) lastIndexOf(item, from) – то же самое, что и indexOf, но ищет справа налево
// let newP = arr.lastIndexOf(false); //5
// let newP = arr.lastIndexOf('str'); // 1
// console.log(newP);

// 3) includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
// !!!!! очень незначительным отличием includes является то, что он правильно обрабатывает NaN в отличие от indexOf/lastIndexOf
// let newP = arr.includes('str'); // true
// let newP = arr.includes('bla'); // false
// let newP = arr.includes(false); // true
// console.log(newP);

// методы используют строгое сравнение ===. Таким образом, если мы ищем false, он находит именно false, а не ноль.

//#endregion

//#region find/findIndex
// find(function(item, index, array){} - Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined

// let newP = persons.find((item) => {
//     // console.log(item.age == 22); // вернет 3 false и 1 true
//     // console.log(item.age == 27); // вернет false true и 2 false
//     if(item.age == 22) {
//         console.log(item); // вернет {firstName: "Natalie", age: 22, occupation: "Designer"}
//     }
// })

// findIndex – по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.
// let newP = persons.findIndex((item, index) => {
//     if (item.age == 22) {
//         console.log(index); // 3
//     }
// });
//#endregion

//#region filter
// Метод find ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт true.
// На тот случай, если найденных элементов может быть много, предусмотрен метод arr.filter(fn).
// !!! filter возвращает массив из всех подходящих элементов !!!

// let newP = persons.filter((item) => {
//     if(item.age > 25) {
//         console.log(item); // вернет просто объекты {firstName: "Vitalik", age: 27, occupation: "Fullstuck"}, {firstName: "Julia", age: 30, occupation: "Engineer"}
//     }
// });

// let newP = persons.filter(item => item.age > 25);
// console.log(newP); // так вернет массив из 2х элементов

// let newP = persons.filter(item => item.age !== 25);
// console.log(newP); //так вернет массив из 3х элементов
//#endregion

//#region map
// вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

// let newP = persons.map((item) => item.firstName.length);
// console.log(newP);// вернет [6, 7, 5, 7]
//#endregion

//#region sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.
// !!!!! По умолчанию элементы сортируются как строки. "2" > "15"
// Метод arr.sort(fn) реализует общий алгоритм сортировки. Нам не нужно заботиться о том, как он работает внутри (в большинстве случаев это оптимизированная быстрая сортировка). Она проходится по массиву, сравнивает его элементы с помощью предоставленной функции и переупорядочивает их. Всё, что остаётся нам, это предоставить fn, которая делает это сравнение.

// let newP = persons.sort((item, el) => item.age - el.age);
// console.log(newP); // отсортирует объекты в массивe в порядке возрастания по age

// let newP = persons.sort((item, el) => el.age - item.age);
// console.log(newP); // отсортирует объекты в массивe в порядке убывания по age
//#endregion

//#region reverse
// Метод arr.reverse меняет порядок элементов в arr на обратный.
// Метод reverse() на месте(!!!) переставляет элементы массива, на котором он был вызван, изменяет массив и возвращает ссылку на него.
// let newP = persons.reverse();
// console.log(newP); // выведет массив с объектами в обратном порядке

//#endregion

//#region  split/join
// 1) Метод split(separator) разбивает объект String на массив строк путём разделения строки указанной подстрокой.
// Параметр separator может быть как строкой, так и регулярным выражением.
// Метод split() возвращает новый массив.
// let str = "тест";
// console.log(str.split('')); //["т", "е", "с", "т"]

// let str = "тест, проверка, эксперимент";
// console.log(str); // тут просто строка тест, проверка, эксперимент
// console.log(str.split(', ')); // тут массив ["тест", "проверка", "эксперимент"]

// 2) Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.
// let newP = persons.join(" * ");
// console.log(newP); // [object Object] * [object Object] * [object Object] * [object Object]

// let newP = arr.join("*");
// console.log(newP); // вернет строку 0*str*1*true*89*false
//#endregion

//#region reduce/reduceRight
// Они используются для вычисления какого-нибудь единого значения на основе всего массива.
//Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов. !!!!!!!
// let array = [1, 2, 3, 4, 5];

// let result = array.reduce((sum, current) => sum + current, 0);
// console.log(result); // 15

// let newP = persons.reduce((prevValue, item) => prevValue + item.age, 0);
// console.log(newP); // 104

// Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.
//#endregion

//#region every/some
// 1) Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. !!!! метод возвращает true при любом условии для пустого массива.
// Метод every() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт ложное значение (значение, становящееся равным false при приведении его к типу Boolean). Если такой элемент найден, метод every() немедленно вернёт false. В противном случае, если callback вернёт true для всех элементов массива, метод every() вернёт true.
// let newP = persons.every((item) => {
//     console.log(item.age > 10); // вернет 1 раз true
// });
// let newP = persons.every((item) => {
//     console.log(item.age > 25); // вернет 1 раз false
// });

// let newP = persons.every((item) => {
//     console.log(item.age > 22); // вернет 1 раз true
// });

// 2) Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции. !!!! метод возвращает false при любом условии для пустого массива.
// Метод some() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт истинное значение (значение, становящееся равным true при приведении его к типу Boolean). Если такой элемент найден, метод some() немедленно вернёт true. В противном случае, если callback вернёт false для всех элементов массива, метод some() вернёт false.
// let newP = persons.some((item) => {
//     console.log(item.age > 10); // вернет 4 раза true
// })

// let newP = persons.some((item) => item.age > 25);
// console.log(newP); // вернет 1 раз true

// let newP = persons.some((item) => item.age > 30);
// console.log(newP); // вернет false
//#endregion

//#region fill
// Метод fill(value) заполняет все элементы массива от начального до конечного индексов одним значением.
// value - Значение, заполняющее массив.
// Возвращаемое значение - Изменённый массив.
// Если аргумент value​​​​​ является объектом, то метод fill заполнит массив ссылками на этот объект.

// let newP = persons.fill('проверка');
// console.log(newP); // выведет массив ["проверка", "проверка", "проверка", "проверка"]

// let newP = persons.fill({ name: "nastya"});
// console.log(newP); // вернет массив из 4х одинаковых объектов { name: "nastya"}

let newP = persons.fill({ name: "nastya" }, 2);
console.log(newP); // вернет массив из первых двух старых объектов и два следующих - замененные:
// [
//     { firstName: "Nastya", age: 25, occupation: "Frontend-developer" },
//     { firstName: "Vitalik", age: 27, occupation: "Fullstuck" },
//     { name: "nastya" },
//     { name: "nastya" },
// ];
//#endregion
