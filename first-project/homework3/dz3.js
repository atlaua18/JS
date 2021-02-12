let roadMines = [false, true, false, true, true, false, false, false, false, false];

// let position = roadMines[] + 1; //номер ячейки + 1

// let position = 0;

// let cellNumber = position + 1;

// roadMines.length

// let pos = roadMines.indexOf(true);

// let mins = 'true';

// let mins2 = false;

let lives = 2;

// for (let i = roadMines.length - 10; i <= 9; ++i)

// let flag = false;
// while (!flag) {
//     console.log(lives++ > 3);
//     console.log(++lives > 3);
//     if(lives === 10) flag = true;
// }

for (let i = 0; i < roadMines.length; ++i) {
    // console.log(roadMines[i]);
    // if (roadMines[i] === false) {
    
    console.log (`танк переместился на ${parseInt(i) + 1}`);
    if (roadMines[i] === true) {
        lives--;
        // lives === 0 ? console.log('танк уничтожен') : console.log('танк повреждён');
        if(lives === 0) {
            console.log('танк уничтожен');
            break;
        }
        console.log('танк повреждён');
    }
    // if (roadMines[i++] === true) {
    //     console.log('танк уничтожен');
    //     }
}

// for (let position in roadMines) {
//     console.log (`танк переместился на ${parseInt(position) + 1}`);
    // if (position == roadMines['true']) {
    //     console.log('танк повреждён')
    //     break;
    // }
    // for (let mins of roadMines) {
    //     if(mins === true) {
    //         console.log('танк повреждён');
    //         break;
    //     }
    // }
    // for (let i = 0; roadMines[i] === 'true'; ) {
    //     ++i;
    //     console.log('танк повреждён');
    // }
    // for (let i = 0; i < 9; ++i) {
    //     roadMines[i] === 'true';
    //     console.log('танк повреждён');
    // }
// }

// roadMines.indexOf(true) 
// roadMines.includes(true)
// Object.keys(roadMines)

// for (let mins of roadMines) {

//     if (mins !== true) {
//         console.log('танк повреждён')
//         continue;
//     }
    // else (mins === true) {
    //     console.log('танк уничтожен')
    //     break;
    // }
// 

// for (let mins of roadMines) {
//     if (mins !== true) continue;
//         console.log('танк повреждён');
//         if (mins === true) break;
// }
// console.log('танк уничтожен')