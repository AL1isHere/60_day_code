//usefull sting properties & method

let userName = "   Hello World   ";
let phoneNum = "123-345-6778";

console.log(userName.length); //menyatakan panjang string
console.log(userName.charAt(0)); //mengambil char pada string
console.log(userName.indexOf("o")); //huruf pada o yg pertama dalam string
console.log(userName.lastIndexOf("o")); //huruf o yg terkahir pada string
console.log(userName = userName.trim()); //membuang space yg tidak dibutukan dalam string
console.log(userName = userName.toUpperCase()); //membuat semua font menjadi capital
console.log(userName = userName.toLowerCase()); //membuat semua font menjadi huruf kecil
console.log(phoneNum = phoneNum.replaceAll("-","/")); //ubah char yg diawal menjadi char yg ada di belakang koma
