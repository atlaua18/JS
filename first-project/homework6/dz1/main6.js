document.addEventListener('DOMContentLoaded', function () {
    let inputNumber = document.querySelector('.input');
    let startTimer = document.querySelector('.btn');
    let enteredNumber = document.querySelector('.div');

    let timer;

    function beginTimer() {
        let currentValue = inputNumber.value;
        enteredNumber.textContent = currentValue;
        timer = setInterval(getTimer, 1000);
    }

    function getTimer() {

        let i = parseInt(enteredNumber.textContent);

        if (i > 0) {
            i = i - 1;
            enteredNumber.textContent = i;
        } else {
            stopTimer();
        }
    }

    function stopTimer() {
        if (enteredNumber.textContent == 0) {
            clearInterval(timer);
            enteredNumber.textContent = 'stop';
        } else if (enteredNumber.textContent !== Number(enteredNumber.textContent)) {
            clearInterval(timer);
            enteredNumber.textContent = 'введите число';
        }
    }

    startTimer.addEventListener('click', beginTimer);
});


    // let timer;

    // function beginTimer() {
    //     let currentValue = parseInt(inputNumber.value);
    //     enteredNumber.textContent = currentValue;
    //     timer = setInterval(getTimer, 1000);
    // }

    // function enterNum() {
    //     let currentValue = parseInt(inputNumber.value);
    //     enteredNumber.textContent = currentValue;
    //     return currentValue;
    // }
    // enterNum();

    // function getTimer() {
    //     // let currentValue = parseInt(inputNumber.value);
    //     // currentValue = enteredNumber.textContent;
    //     // enteredNumber.textContent = parseInt(inputNumber.value);

    //     // enteredNumber.textContent = enterNum();
    //     let i = enteredNumber.textContent;

    //     if (i > 0) {
    //         i = i - 1;
    //         enteredNumber.textContent = i;
    //     } else {
    //         enteredNumber.textContent = 'stop';
    //     }

        // let isZero = false;

        // while(!isZero) {

        //     let i = enteredNumber.textContent;

        //     if(i > 0) {
        //         i = i - 1;
        //         enteredNumber.textContent = i;
        //     } else {
        //         i = 'stop';
        //         isZero = true;
        //     }
        // }
    // }

    // let timer;

    // function beginTimer() {
    //     timer = setInterval(getTimer, 1000);
    // }

//     startTimer.addEventListener('click', beginTimer);
// });
//     // let currentValue = inputNumber.value;
//     function enterNum () {
//         // let currentValue = parseInt(inputNumber.value);
//         return inputNumber.value;
//     }

//     function getTimer() {
//         // let currentValue = parseInt(inputNumber.value);
//         // enteredNumber.textContent = currentCount;
//         // let currentValue = parseInt(inputNumber.value);
//         // let currentCount = enteredNumber.textContent;
//         enteredNumber.innerHTML = enterNum ();

//         if (parseInt(enteredNumber.innerHTML) > 0) {
//             // enteredNumber.textContent = currentValue
//             enteredNumber.innerHTML = enteredNumber.innerHTML - 1;
//             // currentValue = 
//         } else {
//             enteredNumber.innerHTML = 'stop';
//         }
//         // setInterval(getTimer, 1000);
//     }

//     // if (currentValue > 0) {
//     //     enteredNumber.textContent = currentValue - 1;
//     // } else {
//     //     enteredNumber.textContent = 'stop';
//     // }
//     // enteredNumber.textContent = currentCount;

//     // setInterval(getTimer, 1000);

//     // function beginTimer() {
//     //     timer = setInterval(getTimer, 1000);
//     //     if (currentValue > 0) {
//     //         enteredNumber.textContent = currentValue - 1;
//     //     } else {
//     //         enteredNumber.textContent = 'stop';
//     //     }
//     // }
//     // beginTimer();

//     let timer;

//     function beginTimer() {
//         timer = setInterval(getTimer, 1000);
//     }
//     // beginTimer();

//     // let timer = setInterval(getTimer, 1000);

//     startTimer.addEventListener('click', beginTimer);
// });

