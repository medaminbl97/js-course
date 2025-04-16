const {Person} = require("./person")



function add_persons(person1, person2) {
    const person_tmp = new Person(`${person1.name}, ${person2.name}`,person1.age + person2.age)
    return person_tmp
}


module.exports = {add_persons}