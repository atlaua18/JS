// Написать программу, которая последовательно запрашивает у пользователя числа при помощи prompt, пока он не нажмет “Отмена”. После нажатия “Отмена”, программа выводит сумму введенных чисел при помощи alert. Если пользователь ввел не число (а, например, строку), то это значение не суммируется с остальными.

let input;
let number;
let sum = 0;

// while(true) {

//     input = prompt('Введите число');

//     if(input) {
//         number = +input;
//         sum += number;
//     } else if(input === null) {
//         alert(sum);
//         break;
//     }

// }

while(true) {

    input = prompt('Введите число');

    number = Number(input);

    if(number) {
        sum += number;
    } else if(input === null) {
        alert(sum);
        break;
    } else if(number === String(input)) {
        continue;
    }

}







// while(true) {

//     number = prompt('Введите число');

//     if(true) {

//     }
//     sum = 
//     alert(`Сумма введенных чисел: `)
// }

// do {
//     number = prompt('Введите число');
// } 
// while(number === +number) {
//     number = prompt('Введите число');
// } alert()