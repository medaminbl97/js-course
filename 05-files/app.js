const fs = require("fs");


const path = "05-files/mytext.txt"
const path2 = "05-files/mytext2.txt"
const text = "This is text written with java script !"

fs.writeFileSync(path,text)

let read_text = fs.readFileSync(path, "utf8")
console.log(read_text);
read_text = read_text.replace("java","Java")
read_text = read_text.replace("script","Script")

fs.writeFileSync(path2,read_text)
