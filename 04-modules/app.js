
const {Person} = require("./person")
const {add_persons} = require("./math")

const zaineb = new Person("Zaineb Bellil",20)
const Mohamed = new Person("Mohamed Bellil",28)
zaineb.whoami()
Mohamed.whoami()
const sum = add_persons(zaineb,Mohamed)

sum.whoami()