// Написать программу, которая выводит в консоль все високосные годы от 1900 до 2020. Алгоритм определения високосного года следует найти в интернете самостоятельно. Вам нужно попробовать усовершенствовать программу, чтобы она принимала начальный и конечный год от пользователя. Следует учесть ситуацию, когда начальный год оказался больше конечного.

// 1) выводит в консоль все високосные годы от 1900 до 2020
// for(let firstYear = 1900; firstYear <= 2020; firstYear++) {

//     if(firstYear % 4 === 0) {
//         console.log(`Високосный год: ${firstYear}`);
//     } 
// }    


// 2) принимает начальный и конечный год от пользователя

let firstYear;
let lastYear;

while (true) {

    firstYear = prompt('Введите начальный год');
    lastYear = prompt('Введите конечный год');

    if (firstYear > lastYear) {
        alert(`Начальный год ${firstYear} больше конечного ${lastYear}. Не верно`);
        continue;
    }

    for (firstYear; firstYear <= lastYear; firstYear++) {
        if (firstYear % 4 === 0) {
            console.log(`Високосный год: ${firstYear}`);
        }
    }

    break;
}

// while (firstYear > lastYear) {
    //     alert(`Начальный год ${firstYear} больше конечного ${lastYear}. Не верно`);
    //     break;
    // }

    // if(firstYear > lastYear) {
    //     alert(`Начальный год ${firstYear} больше конечного ${lastYear}. Не верно`);
    //     break;
    // } 

    // while(firstYear % 4 === 0) {
    //     console.log(`Високосный год: ${firstYear}`);
    //     firstYear++;
    // }



    // if(firstYear % 4 === 0) {
    //     console.log(`Високосный год: ${firstYear}`);
    //     firstYear++;
    //     continue;
    // } else if(firstYear % 4 !== 0) {
    //     break;
    // }
// }


// for(firstYear; firstYear <= lastYear; firstYear++) {

//     // if(lastYear < firstYear) {
//     //     console.log(`Начальный год ${firstYear} больше конечного ${lastYear}. Не верно`);
//     //     continue;
//     // } 
//     if(firstYear % 4 === 0) {
//         console.log(`Високосный год: ${firstYear}`);
//     } 
// }