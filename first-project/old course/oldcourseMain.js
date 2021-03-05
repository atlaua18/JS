document.addEventListener('DOMContentLoaded', function () {
  document.body.innerHTML = "<h2>Я загадал число от 0 до 100. Попробуйте его угадать</h2>";
  let div = document.createElement('div');
  let inputNumber = document.createElement('input');
  let submit = document.createElement('button');
  let result = document.createElement('div');
  let submit2 = document.createElement('button');

  let randomNumber = Math.round(Math.random() * 100);

  // document.body.append(div);
  div.style.width = '250px';
  div.style.height = '50px';
  div.style.backgroundColor = 'orange';
  div.style.textAlign = 'center';
  div.innerHTML = 'Загаданное число:' + randomNumber;

  document.body.append(inputNumber);
  inputNumber.style.padding = '10px';
  inputNumber.style.width = '250px';
  inputNumber.style.marginTop = '10px';
  inputNumber.style.marginRight = '10px';
  inputNumber.placeholder = 'Введите число';
  inputNumber.id = 'number';

  document.body.append(submit);
  submit.textContent = 'OK';
  submit.style.backgroundColor = 'orange';
  submit.onmouseover = function (event) {
    event.target.style.backgroundColor = 'rgb(255, 127, 8)';
  }
  submit.onmouseout = function (event) {
    event.target.style.backgroundColor = 'orange';
  }
  submit.style.border = 'none';
  submit.style.padding = '10px';
  submit.style.borderRadius = '5px';
  submit.style.cursor = 'pointer';
  submit.style.outline = 'none';
  submit.id = 'btn';
  
  document.body.append(result);
  result.id = 'result';
  result.style.width = '180px';
  result.style.height = '80px';
  result.style.padding = '10px';
  result.style.border = '1px solid';
  result.style.marginTop = '10px';
  result.style.marginBottom = '10px';
  // result.onmouseover = function (event) {
  //   event.target.textContent = 'Поле для вывода результата';
  //   event.target.style.color = 'grey';
  // }
  // result.onmouseout = function (event) {
  //   event.target.textContent = ' ';
  //   event.target.style.color = 'black';
  // }

  document.body.append(submit2);
  submit2.textContent = "Очистить";
  submit2.style.backgroundColor = 'orange';
  submit2.onmouseover = function (event) {
    event.target.style.backgroundColor = 'rgb(255, 127, 8)';
  }
  submit2.onmouseout = function (event) {
    event.target.style.backgroundColor = 'orange';
  }
  submit2.style.border = 'none';
  submit2.style.padding = '10px';
  submit2.style.cursor = 'pointer';
  submit2.style.borderRadius = '5px';
  submit2.id = 'btn2';

  function prov() {

    let inputId = document.getElementById('number').value;

    if (parseInt(inputId) === randomNumber) {
      document.getElementById('result').innerHTML = `Вы угадали. Загаданное число: ${inputId}. Для генерации нового числа обновите страницу`;
    } else if (parseInt(inputId) > randomNumber) {
      document.getElementById('result').innerHTML = 'Ваше число БОЛЬШЕ';
    } else if (parseInt(inputId) < randomNumber) {
      document.getElementById('result').innerHTML = 'Ваше число МЕНЬШЕ';
    } else if (inputId !== parseInt(inputId)) {
      document.getElementById('result').innerHTML = 'Это не число. Попробуйте еще раз, нажав кнопку ниже';
    }


    btn2.onclick = function () {
      document.getElementById('number').value = '';
      document.getElementById('result').innerHTML = '';
    }
  }
  document.getElementById('btn').addEventListener('click', prov);
});

//   function prov() {

//     let isNumberTrue = false;

//     // let inputId = document.getElementById('number').value;

//     while (!isNumberTrue) {

//       let inputId = document.getElementById('number').value;

//       if (inputId == randomNumber) {
//         document.getElementById('result').innerHTML = `Вы угадали. Загаданное число: ${inputId}`;
//         isNumberTrue = true;
//         break;
//       } else if (parseInt(inputId) > randomNumber) {
//         document.getElementById('result').innerHTML = 'Ваше число БОЛЬШЕ';
//         continue;
//       } else if (parseInt(inputId) < randomNumber) {
//         document.getElementById('result').innerHTML = 'Ваше число МЕНЬШЕ';
//         isNumberTrue = true;
//         continue;
//       }
//     }
//     btn.onclick = function () {
//       document.getElementById('number').value = '';
//       document.getElementById('result').innerHTML = '';
//     }
//   }
//   document.getElementById('btn').addEventListener('click', prov);
// });

  // let inputId = document.getElementById('number').value;

//   function prov() {

//     let isNumberTrue = false;

//     let inputId = document.getElementById('number').value;

//     while (!isNumberTrue) {

//       // let inputId;

//       // function clicked() {
//       //   inputId = document.getElementById('number').value;
//       // }

//       // document.getElementById('btn').addEventListener('click', clicked);

//       // let inputId = document.getElementById('number').value;

//       if (inputId == randomNumber) {
//         document.getElementById('result').innerHTML = `Вы угадали. Загаданное число: ${inputId}`;
//         // btn.onclick = function () {
//         //   document.getElementById('number').value = '';
//         //   document.getElementById('result').innerHTML = '';
//         // }
//         isNumberTrue = true;
//         break;
//       } else if (parseInt(inputId) > randomNumber) {
//         document.getElementById('result').innerHTML = 'Ваше число БОЛЬШЕ';

//         // btn.onclick = function () {
//         //   document.getElementById('number').value = '';
//         //   document.getElementById('result').innerHTML = '';
//         // }

//         // document.getElementById('number').value = '';
//         // document.getElementById('btn').addEventListener('click', value) = '';
//         // onclick="document.getElementById('number').value = ''";
//         // continue;
//         isNumberTrue = true;
//       } else if (parseInt(inputId) < randomNumber) {
//         document.getElementById('result').innerHTML = 'Ваше число МЕНЬШЕ';
//         // document.getElementById('number').value = ''

//         // btn.onclick = function () {
//         //   document.getElementById('number').value = '';
//         //   document.getElementById('result').innerHTML = '';
//         // }

//         isNumberTrue = true;
//         // continue;
//       }

//     }
//     btn.onclick = function () {
//       document.getElementById('number').value = '';
//       document.getElementById('result').innerHTML = '';
//     }
//   }
//   document.getElementById('btn').addEventListener('click', prov);
// });


// function prov() {

//   let isNumberTrue = false;

//   let inputId = document.getElementById('number').value;

//   while (!isNumberTrue) {
//     if (inputId == randomNumber) {
//       document.getElementById('result').innerHTML = `Вы угадали. Загаданное число: ${inputId}`;
//       isNumberTrue = true;
//         break;
//       } else if (parseInt(inputId) > randomNumber) {
//         document.getElementById('result').innerHTML = 'Ваше число БОЛЬШЕ';
//         isNumberTrue = true;
//       } else if (parseInt(inputId) < randomNumber) {
//         document.getElementById('result').innerHTML = 'Ваше число МЕНЬШЕ';
//         isNumberTrue = true;
//       }
//     }
//     btn.onclick = function () {
//       document.getElementById('number').value = '';
//       document.getElementById('result').innerHTML = '';
//     }
//   }
//   document.getElementById('btn').addEventListener('click', prov);
// });



// function getTrueNumber() {

//   let isNumberTrue = false;

//   while (!isNumberTrue) {

//     let input = prompt('Введите число');

//     if (input === null) {
//       alert('Вы вышли из игры');
//       isNumberTrue = true;
//       break;
//     } else if (input < randomNumber) {
//       alert('Ваше число МЕНЬШЕ загаданного. Попробуйте снова');
//       continue;
//     } else if (input > randomNumber) {
//       alert('Ваше число БОЛЬШЕ загаданного. Попробуйте снова');
//       continue;
//     } else if (input === randomNumber) {
//       alert(`Вы угадали! ${randomNumber} - загаданное число. Поздравляю.`);
//       isNumberTrue = true;
//     }

//     return 0;
//   }
// }
// getTrueNumber();