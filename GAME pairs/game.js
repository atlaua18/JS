document.addEventListener('DOMContentLoaded', function () {

    let container = document.querySelector('.container');
    
    function createCard(number, index) {

        let list = document.createElement('ul');
        list.style.border = '1px solid blue';
        list.style.padding = '0';
        container.append(list);

        let item = document.createElement('li');
        item.style.listStyleType = 'none';
        item.style.width = '80px';
        item.style.height = '80px';
        item.style.fontSize = '40px';
        item.style.textAlign = 'center';
        item.id = index;
        item.textContent = number;
        item.classList.add('hide');
        list.append(item);

        return item;
    }

    function createArray() {
        let arrayNumbers = [];

        for (let i = 1; i <= 8; i++) {
            arrayNumbers.push(i);
            arrayNumbers.push(i);
        }

        for(let i = arrayNumbers.length - 1; i >= 1; i--) {
            let num = Math.round(Math.random() * i);
            let vedro = arrayNumbers[num];
            arrayNumbers[num] = arrayNumbers[i];
            arrayNumbers[i] = vedro;
        }

        return arrayNumbers;
    }

    function compareCards(someNum, someId) {
        let compareArrayNum = [];

        for(let i = 0; i < 2; i++) {
            compareArrayNum.push(someNum);
        }

        console.log(compareArrayNum);

        let compareArrayId = [];

        compareArrayId.push(someId);

        console.log(compareArrayId);

    }

    function getManyCards(someArray) {

        let oneCard;
        someArray = createArray();

        for (let i = 0; i < someArray.length; i++) {
            oneCard = createCard(someArray[i], i);
            oneCard.addEventListener('click', (e) => {
                let numberInCard = e.target.textContent;
                let idCard = e.target.id;
                compareCards(numberInCard, idCard);
                // console.log(numberInCard);
                // console.log(idCard);
                e.target.classList.toggle('hide');
            });
        }
    }
    getManyCards();
});

// let card = document.querySelector('.card');
    // let cardContent = document.querySelector('.card_content');

    // let allClassCard = document.querySelectorAll('.card');
    // console.log(allClassCard);
    // console.log(allClassCard[0].id);

    // cardContent.classList.add('display_none');

    // let contentArray = [4, 5];

    // function getCardId() {
    //     let idNumber;

    //     container.addEventListener('click', function(e) {
    //         idNumber = e.target.id;
    //         console.log(idNumber);
    //     });

    // }

    // getCardId();

    // container.addEventListener('click', function(e) {
    //     let idNumber = e.target.id;
    //     // console.log(idNumber);
    // });

    // function ShowCardContent() {

    //     container.addEventListener('click', function(e) {
    //         let idNumber = e.target.id;
    //         console.log(idNumber);
    //     });
    // }

    // card.addEventListener('click', ShowCardContent);

    // function ShowCardContent(event) {
    //     // console.log(event.target.id);

    //     // let idNumberFunc = getCardId();
    //     // let idNumber = allClassCard[0].id;

    //     for (let i = 0; i < contentArray.length; i++) {
    //         let idNumber = allClassCard[i].id;
    //         if (idNumber) {
    //             cardContent.textContent = contentArray[i];
    //         }
    //         // cardContent.textContent = contentArray[i];
    //     }

    //     cardContent.classList.toggle('display_none');


    // }

    // container.addEventListener('click', ShowCardContent);









 // cardContent.classList.add('display_none');

        // card.addEventListener('click', () => {
        //     cardContent.classList.toggle('display_none');
        //     // cardContent.style.display = "none";
        // });



// function getCardId() {
        // let idNumber;

        // card.addEventListener('click', () => {
        //     idNumber = document.getElementById();
        // });

        // return idNumber;

        // Array.from(somes).forEach(function(some) {

        //     some.addEventListener('click', function(e) {
        //         idNumber = e.target.id;
        //         // console.log(e.target);
        //         console.log(idNumber);
        //     })
        // }) ;

        // container.onclick = function(e) {
        //     idNumber = e.target.id
        //     // console.log(idNumber);
        // }

        // return (container.onclick = function(e) {
        //     idNumber = e.target.id
        //     // console.log(idNumber);
        // })

        // container.onclick = function(e) {
        //     idNumber = e.target.id;
        //     console.log(idNumber);
        //     return idNumber;
        // }

        // card.addEventListener('click', function(e) {
        //     idNumber = e.target.id;
        //     console.log(idNumber);
        // })
        // return idNumber;

    // }