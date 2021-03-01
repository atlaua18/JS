// Написать программу, которая последовательно запрашивает у пользователя два числа, после чего сравнивает их и выводит одно из сообщений: “Первое число больше второго”, “Второе число больше первого” или “Числа равны”. Необходимо учесть ситуации, когда пользователь вместо числа ввел строку или вообще не ввел ничего. Для получения числа от пользователя пригодится функция prompt, а для вывода – alert.

// let string = false;
let number1;
let number2;
//let stringNumber1 = false;
//let stringNumber2 = false;
let isInputValid = false;

while (true) {

  while (!isInputValid) {
    number1 = prompt('Введите первое число');
    if (!+number1) {
      alert('Не число. Введите первое число еще раз');
    } else {
      isInputValid = true;
    }
  }
  isInputValid = false;
  while (!isInputValid) {
    number2 = prompt('Введите второе число');
    if (!+number2) {
      alert('Не число. Введите второе число еще раз');
    } else {
      isInputValid = true;
    }
  }

  if (number1 > number2) {
    alert(`Первое число(${number1}) больше второго(${number2})`);
    break;
  } else if (number2 > number1) {
    alert(`Второе число(${number2}) больше первого(${number1})`);
    break;
  } else if (number2 == number1) {
    alert('Числа равны');
    break;
  }
}

  // let number1 = parseInt(prompt('Введите первое число'));
  //     if (!number1) {
  //         alert('Не число. Введите первое число еще раз');
  //         continue;
  //     }

  //     let number2 = parseInt(prompt('Введите второе число'));
  //     if (!number2) {
  //         alert('Не число. Введите второе число еще раз');
  //         continue;
  //     }


  // else if (!number1 || !number2) {
  //     alert('Не число. Попробуйте еще раз');
  // }
