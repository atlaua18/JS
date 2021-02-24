let computer = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    coreCount: 8,
    cpuManufacturer: 'AMD',
    socket: 'AM4',
    videoCardModel: 'NVidia GeForce GTX 1060',
    videoMemory: 4096,
    tamType: 'DDR4',
    ramVolume: 8192,
    ramFrequency: 3200,
    price: 100000,
};

let values = Object.values(copmuter);
let keys = Object.keys(computer);
let entries = Object.entries(computer);


console.log('VALUES\n');

for(let values of values) {
    console.log(values);
}

console.log('\n\nKEYS\n');

for(let key of keys) {
    console.log(`${key}: ${computer[key]}`);
}

console.log('\n\nENTRIES\n');

for(let entry of entries) {
    console.log(`${entry[0]}: ${entry[1]}`);
}

console.log('\n\nENTRIES WITH DESTRUCTURING\n');

// так же, но более читаемо
// работает так же,как и предыдущий вариант с entries
for(let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}
// [key, value] деструктуризация
// Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.