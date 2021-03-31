document.addEventListener('DOMContentLoaded', function () {

    let container = document.querySelector('.container');
    let card = document.querySelector('.card');
    let cardContent = document.querySelector('.card_content');

    let allClassCard = document.querySelectorAll('.card');
    // console.log(allClassCard);
    // console.log(allClassCard[0].id);

    cardContent.classList.add('display_none');

    let contentArray = [4, 5];

    function getCardId() {
        let idNumber;

        container.addEventListener('click', function(e) {
            idNumber = e.target.id;
            console.log(idNumber);
        });

        return idNumber;
    }
    let some = getCardId();
    console.log(some);

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
});








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