// Напишите функцию, которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок. В качестве аргументов функция принимает 3 параметра:

// Общая сумма корзины
// Количество товаров в корзине
// Промокод (по умолчанию null)

// Правила и порядок (порядок важен!) начисления скидок:

// Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
// При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
// При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
// Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
// Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.

// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции.

//let totalSum = 150;
// let numberOfProducts = 18;

// promoCode = prompt(`Введите промокод: `);
let promoCode;

function totalAmount(totalSum, numberOfProducts, promoCode) {
    
    console.log(`Начальная стоимость покупки: ${totalSum}`);

    let finalSum;
     
    promoCode = prompt(`Введите промокод: `);

    if(promoCode == 'ДАРИМ300' && totalSum <= 300) {
        console.log('Общая сумма меньше 300. Промокод и последующие скидки не могут быть применены.')
        return 'Итоговая сумма покупки: ' + totalSum;
    } else if (promoCode == 'ДАРИМ300' && totalSum > 300) {
        finalSum = totalSum - 300;
        console.log('Промокод скидка 300: ' + finalSum);
    } else if(promoCode == null) {
        finalSum = totalSum;
        console.log(`Промокод отсутствует, сумма осталась прежней: ${finalSum}`);
    }
    
    if(numberOfProducts >= 10) {
        finalSum = finalSum - finalSum * 0.05; //finalSum *= 0.5; //finalSum = finalSum * 0.95
        console.log('Скидка 5%: ' + finalSum);
    } else if (numberOfProducts < 10) {
        finalSum;
        console.log('Для скидки 5% товаров в корзине должно быть больше 10. Сумма: ' + finalSum);
    }

    if(finalSum >= 50000) {
        finalSum = (finalSum - 50000) * 0.8;
        console.log('Скидка 20%: ' + finalSum);
    } else if(finalSum < 50000) {
        console.log('Общая сумма покупок меньше 50000, скидка не может быть применена. Сумма: ' + finalSum);
    }

    promoCode = prompt(`Введите промокод: `);

    if(promoCode == 'СКИДКА15' && finalSum >= 20000) {
        finalSum = finalSum * 0.85;
        console.log('Промокод скидка 15%: ' + finalSum);
    } else if(promoCode == 'СКИДКА15' && finalSum < 20000) {
        console.log('Общая сумма покупок меньше 20000, промокод не может быть применен. Сумма: ' + finalSum);
    } else if(promoCode == null) {
        console.log('Промокод отсутствует. Сумма: ' + finalSum);
    }

    return 'Конечная стоимость: ' + finalSum;
}

console.log(totalAmount(350, 9, promoCode));