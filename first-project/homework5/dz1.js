let information = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

let newInformation;

function filterArray(someObject, value) {

    for (let i = 0; i < information.length; i++) {

        let objectFromArray = someObject[i];

        let nameFromObject = objectFromArray.name;

        if (nameFromObject === value) {
            // newInformation = Object.assign([{}], objectFromArray); // [ {}, name: 'Иван', surname: 'Иванов' ]
            newInformation = Object.assign({}, objectFromArray);
        } else {
            continue;
        }
    }

}

filterArray(information, 'Иван');
console.log(newInformation);

// function filterArray(someObject, key, value) {

//     let objectFromArray = someObject[1];
//     let nameFromObject = objectFromArray.name;

//     if (nameFromObject === value) {
//         newInformation = Object.assign({}, objectFromArray);
//     } 
//     // return newInformation;
// }

// filterArray(information, 'name', 'Иван');

// console.log(Object.entries(newInformation));
// console.log(newInformation);

// information.name === values;

// let newInformation = {
//     filterArray() {}
// };

// information[i];

// let objectFromArray = information[i]; // по индексу выведет объект внутри массива
// if(information[i] === )
// let nameFromObject = objectFromArray.name; // присваивает значение свойства, то есть "Иван", "Василий" и тд

// for (let i = 0; i < information.length; i++) {

//     let objectFromArray = someObject[i];

//     let nameFromObject = objectFromArray.name;

//     if (nameFromObject === value) {
//         newInformation = Object.assign({}, objectFromArray);
//     } else {
//         continue;
//     }
// }