let me = {
    birthDate: {year: 1996, month: 3, day: 18},
    getAge() {
        let now = new Date();
        let born = new Date(
            this.birthDate.year,
            this.birthDate.month + 1,
            this.birthDate.day
        );
        let diffInMilliseconds = now.getTime() - this.birthDate.getTime();
        return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
    }
    // ...другие свойства...
}

console.log(me.getAge());

// Функции, которые определяются внутри объекта называются МЕТОД
// getAge() - метод объекта me, который возвращает текущий возраст человека
// getAge() то же самое, что и getAge: function () 
// метод - это простое свойство, значением которого является функция