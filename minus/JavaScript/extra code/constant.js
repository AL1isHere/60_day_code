//const = variable yg tidak bisa diubah

//Penulisan var const disarankan menggunakan allCaps
const PI = 3.14158;
let radius;
let circumference

radius = window.prompt("Enter the radius of a circle")
radius = Number(radius)

circumference = 2 * PI * radius

console.log("the circumference is ", circumference)