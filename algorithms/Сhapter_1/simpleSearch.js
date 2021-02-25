// function simpleSearch(someArray, element) {

//     for (let currentIndex = 0; currentIndex < someArray.length; currentIndex++) {
//         if (someArray[currentIndex] === element) {
//             console.log(`Элемент найден. Индекс элемента ${currentIndex}`);
//         } else {
//             continue;
//         }
//     }
// }

// const start = new Date().getTime();

export default function simpleSearch(someArray, element) {

    let isFounded = false;
    let currentIndex = 0;

    while (!isFounded) {
        if (someArray[currentIndex] === element) {
            console.log(`Элемент найден ${element}. Индекс элемента ${currentIndex}`);
            isFounded = true;
        } else {
            currentIndex = currentIndex + 1;
        }
    }
}

// const end = new Date().getTime();

// console.log('Простой поиск:')

// console.log(`Время запуска ${start}ms`);
// console.log(`Время окончания ${end}ms`);

// console.log(`Выполнилось за: ${end - start}ms`);

// let array = [];

// for (let i = 0; i < 1000; i++) {
//     array[i] = i + 1;
// }

// simpleSearch(array, 666);