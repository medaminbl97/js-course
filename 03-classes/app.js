class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    whoami () {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
        
    }
}

const zaineb = new Person("Zaineb", 20)
const moahmed = new Person("Mohamed", 28)
console.log(zaineb);
console.log(moahmed);
zaineb.whoami()
moahmed.whoami()

const persons = []
persons.push(zaineb)
persons.push(moahmed)
persons.push("Hellow")
persons.push(78)

console.log(persons);
