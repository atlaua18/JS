document.addEventListener('DOMContentLoaded', function () {

    let container = document.querySelector('.container');
    
    function createCard(number) {

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
        item.textContent = number;
        list.append(item);

        return item;
    }

    function createArray() {
        let ArrayNumbers = [];

        for (let i = 1; i <= 8; i++) {
            ArrayNumbers.push(i);
            ArrayNumbers.push(i);
        }

        return ArrayNumbers;
    }

    function getManyCards(someArray) {

        let oneCard;
        someArray = createArray();

        for (let i = 0; i < someArray.length; i++) {
            oneCard = createCard(someArray[i]);
            oneCard.addEventListener('click', (e) => {
                let id = e.target.textContent;
                console.log(id);
                oneCard.classList.toggle('display_none');
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