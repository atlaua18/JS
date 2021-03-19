document.addEventListener('DOMContentLoaded', function () {
    let input = document.createElement('input');
    let enteredText = document.createElement('h2');
    let divBlock = document.createElement('div');

    document.body.append(input);
    document.body.append(divBlock);
    divBlock.append(enteredText)

    input.style.padding = '10px';

    divBlock.style.marginTop = '10px';
    divBlock.style.borderRadius = '5px';
    divBlock.style.border = 'solid 1px';
    divBlock.style.width = '300px';
    divBlock.style.height = '150px';
    divBlock.style.wordWrap = 'break-word';
    divBlock.style.overflow = 'hidden';    

    enteredText.style.margin = '0px';
    enteredText.style.fontSize = '18px';

    // let start = function setTimer() {
    //     input.onfocus = function () {
    //         input.value;
    //     }
    //     input.onblur = function () {
    //         setTimeout(getInputText, 3000);
    //     }
    // }

    // function getInputText() {
    //     enteredText.textContent = input.value;
    // }

    // clearTimeout(start);

    // input.addEventListener('input', start);

    let timer;

    function startTimer () {
        clearTimeout(timer);
        timer = setTimeout(getInputText, 3000);
    }

    function getInputText() {
        enteredText.textContent = input.value;
    }

    input.addEventListener('keydown', startTimer);

});


    // let timer;

    // function setTimer() {
    //     let inputText = input.value;

    // }

    // input.oninput = function () {
    //     enteredText.textContent = input.value;
    // }

    // function getInputText() {
    //     let inputText = input.value
    //     debugger
    //     enteredText.textContent = inputText;
    //     setTimeout(getInputText, 1000);
    // }
    // // setTimeout(getInputText, 1000);

    // input.addEventListener('oninput', getInputText);

    // input.onfocus = function() {
    //     if (this.classList.contains('invalid')) {
    //       // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    //       this.classList.remove('invalid');
    //       error.innerHTML = "";
    //     }