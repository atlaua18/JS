// Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.

// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции.

const emailAddress = ['name1@gmail.ru', 'name2@gmail.ru', 'name3@gmail.ru', 'name4@gmail.ru'];
// const emailBlackList = ['namess14@gmail.ru'];
const emailBlackList = ['name2@gmail.ru'];

function getEmailWhiteList(sourceArray, excludeArray) {
    for(const email of excludeArray) {

        let isEmailExists = sourceArray.includes(email);
        if(isEmailExists) {
            let removed = sourceArray.indexOf(email);
            sourceArray.splice(removed, 1);
        }
    }
    return sourceArray;
}

console.log(getEmailWhiteList(emailAddress, emailBlackList));

// console.log(getEmailWhiteList.toString());

// function shit(sourceArray) {
//     return sourceArray.splice(1, 1);
// }
// console.log(emailAddress.toString());
// var some = shit(emailAddress);
// console.log(some.toString());
// console.log(emailAddress.toString());
