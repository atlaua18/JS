// выводится рандомное число
// игра на 2
// ввести никнейм
// по очереди вводить цифру от 1 до 4, которая отнимается от рандомного числа 
// побеждает тот, у кого 0 в консоли 


let gameNumber = Math.round(Math.random()*70) + 30;

//console.log(randomNumber);

let player1 = prompt("Введите никнейм Player1");
let player2 = prompt("Введите никнейм Player2");

let isGameOver = false;

let enterNumber;

// export function someFuncName() {

// }

let gameProcess = function (nickname) {
    return parseInt(prompt(`Текущее число ${gameNumber}\n${nickname} введите число от 1 до 4:`));
}

while (!isGameOver) { //while (isGameOver == false)
    while (true) {
        enterNumber = gameProcess(player1);
        if (!enterNumber || enterNumber > 4 || enterNumber < 1) {
            alert('Попробуйте еще раз');
        } else {
            gameNumber = gameNumber - enterNumber;
            break;
        }
    }

    if (gameNumber <= 0) {
        isGameOver = true;
        alert(`${player1} победил`);
        continue;
    }

    while (true) {
        enterNumber = gameProcess(player2);
        if (!enterNumber || enterNumber > 4 || enterNumber < 1) {
            alert('Попробуйте еще раз');
        } else {
            gameNumber = gameNumber - enterNumber;
            break;
        }
    }

    if (gameNumber <= 0) {
        isGameOver = true;
        alert(`${player2} победил`);
    }
}

// export default gameProcess;
// let some = parseInt(prompt("Введите число"));
// if (!some) {
//     alert("Не число");
// } else {
//     console.log(some);
// }
