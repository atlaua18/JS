let fruit = 'Яблоко';

switch (fruit) {
    case 'Яблоко':
        console.log('Перед нами яблоко');
        break;
    case 'Банан':
        console.log('Перед нами банан');
        break;
    case 'Арбуз':
    case 'Вишня':
    case 'Клубника':
        console.log('Это ягода, а не фрукт');
        break;
    default:
        console.log('Не знаю такого фрукта');
        break;
}