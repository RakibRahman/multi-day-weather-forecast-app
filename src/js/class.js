class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    init() {
        return `HI, i'm ${this.name} and i'm ${this.age} years old`
    }
}
export default Person;