let myname = "Mohamed"
const age = 28

console.log("Name : " + myname + " Age : " + age);

/* age = 55; // this does not work because age is constant
console.log("Name : " + myname + " Age : " + age);
 */
let family = ["Zaineb", "Fatma", "Idriss", "Chadlia", "Mohamed"]

console.log(family[0]);
console.log(family[1]);

for (let index = 0; index < family.length; index++) {
    const element = family[index];
    console.log(`Element ${index} : ${element}`);
}


let Zaineb = {
    name : "Zaineb Bellil",
    age : 20,
    grade : 18
}

console.log(Zaineb);
Zaineb.age = 77;
console.log(Zaineb);
