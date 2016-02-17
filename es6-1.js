class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get description() {
        return `${this.name} is ${this.age} years old`;
    }
}

let person = new Person('Jeroen', 38);
console.log(person.description);
