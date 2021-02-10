let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];




let alphabet = [];

// добавить в конец массива
alphabet.push('Г');
alphabet.push('Д');
alphabet.push('Е', 'Ж', 'З');

// добавить в начало
alphabet.unshift('В');
alphabet.unshift('А', 'Б');

console.log(alphabet);
// [
//   'А', 'Б', 'В',
//   'Г', 'Д', 'Е',
//   'Ж', 'З'
// ]


// Можно получить длину массива

alphabet.length; // 8

// Вывести последний элемент в массиве 
let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];
fruits[fruits.length - 1] // -1 так как элементы в массиве нумеруются с 0


// замена элемента на новый

//массив с вариантами приветствий 
let greetings = ['hello', 'good morning', 'good evning', 'good afternoon'];

console.log(greetings[2]); // упс, опечатка
//исправим опечатку
greetings[2] = 'good evening';

console.log(greetings[2]); //теперь все хорошо