function directions (...args) {
    var [start, ...remaining] = args;
    var [finish, ...stops] = remaining.reverse();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
};

directions(
    'Truckee',
    'Tahoe City',
    'Sunnyside',
    'Homewood',
    'Tahoma'
)