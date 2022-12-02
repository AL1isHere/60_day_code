//semua input yg diminta js akan berbentuk string
let age = window.prompt("How old are you? ")

//diubah mennggunakan Number agar menjadi int 
console.log(typeof age)
age = Number(age);
console.log(typeof age)
age += 1

console.log("Happy birthday! you are", age, "years old")


//selain string ke int ada juga yg lain
let x;
let y;
let z;

x = Number("3.14")
y = String(3.14)
z = Boolean("")

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)