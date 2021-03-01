let randomNumber = Math.round(Math.random() * 10);

let start;

start = alert('Я загадал число от 0 до 100. Попробуйте его угадать');

let isNumberTrue = false;

function getTrueNumber () {

    while(!isNumberTrue) {

        let input = prompt('Введите число');

        if(input === null) {
            alert('Вы вышли из игры');
            isNumberTrue = true;
            break;
        } else if(input < randomNumber) {
            alert('Ваше число МЕНЬШЕ загаданного. Попробуйте снова');
            continue;
        } else if(input > randomNumber) {
            alert('Ваше число БОЛЬШЕ загаданного. Попробуйте снова');
            continue;
        } else if(input === randomNumber) {
            alert(`Вы угадали! ${randomNumber} - загаданное число. Поздравляю.`);
            isNumberTrue = true;
        }

        return 0;
    }
}

console.log(randomNumber);
getTrueNumber();