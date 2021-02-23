// несколько объектов, которые хронят разную инфу о компе

let motherBoard = {
    usbPortCount: 8;
    chipset: 'AMD X570',
    socket: 'AM3/AM4',
};

let cpu = {
    coreCount: 8,
    cpuManufacturer: 'AMD',
    socket: 'AM4',
};

let videoCard = {
    videoCardModel: 'NVidia GeForce GTX 1060',
    videoMemory: 4096,
};

let ram = {
    ramType: 'DDR4',
    ramVolume: 8192,
    ramFrequency: 3200,
};

let computer = {
    price: 100000,
    ...motherBoard, /// ... - это оператор spread
    // свойство socket из объекта motherBoard будет заменено на такое же свойство из cpu
    ...cpu,
    ...videoCard,
    ...ram,
};


// альтернативный способ смешивать объекты между собой с помощью функции Object.assign
let computerWithAssign = Object.assign(
    // целевой объект, в который будут "замешаны" следующие
    {
        price: 100000,
    },
    // объекты, "подмешиваемые" в первый
    motherBoard, cpu, videoCard, ram
);

console.log(computer);
console.log(computerWithAssign);