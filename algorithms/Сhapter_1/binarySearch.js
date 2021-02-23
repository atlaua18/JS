export default function binarySearch (sortedArray, element) {

    let currentIndex = sortedArray.length / 2,
        isFounded = false,
        lowIndex = 0, 
        highIndex = sortedArray.length - 1;

    while(!isFounded) {
       if(sortedArray[currentIndex] === element) {
           console.log(`Элемент найден. Индекс элемента ${currentIndex}`);
           isFounded = true;
       } else if(sortedArray[currentIndex] > element) {
           highIndex = currentIndex;
           currentIndex = Math.round((lowIndex + highIndex) / 2);
       } else if(sortedArray[currentIndex] < element) {
           lowIndex = currentIndex;
           currentIndex = Math.round((lowIndex + highIndex) / 2);
       }
    }
}

// let array = [];

// for(let i = 0; i < 1000; i++) {
//     array[i] = i + 1;
// }

// binarySearch(array, 666);

//export default binarySearch;