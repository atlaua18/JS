let information = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

let newInformation = [];

function filterArray(someObject, key, value) {

    for (let i = 0; i < someObject.length; i++) {

        let objectFromArray = someObject[i];

        // let nameFromObject = someObject[i].name;

        if (objectFromArray[key] === value) {
            // newInformation = Object.assign([{}], objectFromArray); // [ {}, name: 'Иван', surname: 'Иванов' ]
            // newInformation = Object.assign({}, objectFromArray); // {name: "Иван", surname: "Иванов"}
            // newInformation.push(Object.assign({}, objectFromArray)); // [ { name: 'Иван', surname: 'Иванов' } ]
            newInformation.push(objectFromArray);
        } 
    }

}

filterArray(information, 'surname', 'Петров');
console.log(newInformation); 



// function filterArray(someObject, key, value) {

//     for (let i = 0; i < someObject.length; i++) {

//         let objectFromArray = someObject[i];

//         let nameFromObject = someObject[i].key; // "Иван", не name

//         if (nameFromObject === value) {
//             newInformation = Object.assign({}, objectFromArray );
//         } else {
//             continue;
//         }
//     }
// }

// filterArray(information, 'name', 'Иван');
// console.log(newInformation);






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