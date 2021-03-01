document.addEventListener('DOMContentLoaded', function () {
  document.body.innerHTML = "<h2>Я загадал число от 0 до 100. Попробуйте его угадать</h2>";
  let div = document.createElement('div');
  let inputNumber = document.createElement('input');
  // let randomNumber = document.createElement('h3');
  // let placeholder = document.createElement()
  let submit = document.createElement('button');
  let result = document.createElement('div');

  let randomNumber = Math.round(Math.random() * 100);

  document.body.append(div);
  div.style.width = '250px';
  div.style.height = '50px';
  div.style.backgroundColor = 'orange';
  // div.style.margin = 'auto';
  div.style.textAlign = 'center';
  // div.append(randomNumber);
  div.innerHTML = 'Загаданное число:' + randomNumber;
  // div.innerHTML.style.margin = 'auto';

  document.body.append(inputNumber);
  inputNumber.style.padding = '10px';
  inputNumber.style.width = '250px';
  inputNumber.style.marginTop = '10px';
  inputNumber.placeholder = 'Введите число';

  document.body.append(submit);
  submit.textContent = 'OK';
  submit.type = 'submit';
  submit.id = 'btn';

  // let number = prompt('Введите число');
  // inputNumber.textContent = `${number}`;
  inputNumber.id = 'number';
  // let inputId = document.getElementsById('number').value;

  document.body.append(result);
  result.id = 'result';
  result.style.width = '200px';
  result.style.height = '50px';
  // result.style.backgroundColor = 'orange';
  result.style.border = '1px solid';
  result.style.marginTop = '10px';

  function prov() {

    let inputId = document.getElementById('number').value;

    if (inputId == randomNumber) {
      document.getElementById('result').innerHTML = `Вы угадали. Загаданное число: ${inputId}`;
    } else if (parseInt(inputId) > randomNumber) {
      document.getElementById('result').innerHTML = 'Ваше число БОЛЬШЕ';
    } else if (parseInt(inputId) < randomNumber) {
      document.getElementById('result').innerHTML = 'Ваше число МЕНЬШЕ';
    }
    btn.onclick = function () {
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