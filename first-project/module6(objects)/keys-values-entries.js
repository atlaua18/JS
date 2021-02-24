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

console.log(Object.keys(computer)); // воводит то, что до :, то есть [usbPortCount, chipset] и тд // массив
console.log(Object.values(computer)); // выводит то, что после :, то есть [8, 'AMD X570', 8] и тд // массив
console.log(Object.entries(computer)); // выводит все сразу // массив из массивов, то есть [[usbPortCount: 8], [chipset: 'AMD X570'], [coreCount: 8,]] 