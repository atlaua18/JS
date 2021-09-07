console.log ('Привет, мир')








let person = {};
let person1 = {
    child : {
        age: 0,
        getAge: function() {
            return this.age;
        }
    },
    name: "Tom",
    age: 40,
    surname: "BlaBlaBla",
    getDateOfDie: function() {
        return this.age + 40;
    }
}

console.log(person1.child.getAge());