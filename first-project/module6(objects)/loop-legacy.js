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


// на данный момент устаревший
// использовался, пока не было функций Object.values(); Object.keys(); Object.entries();
for(let key in computer) {
    if(!computer.hasOwnProperty(key)) { // метод?
        continue;
    }
    console.log(computer[key]);
}