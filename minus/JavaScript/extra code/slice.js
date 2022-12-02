/*slice()   mengambil bagian dari string dan
            mengambalikannya sebagai string baru, 
            tanpa memodifikasi string orginal
*/

let fullName = "Hello world";
let firstName;
let lastName;

//console.log(lastName = fullName.slice(6));
//console.log(firstName = fullName.slice(0,5));

lastName = fullName.slice(fullName.indexOf(' ') + 1);
firstName = fullName.slice(0, fullName.indexOf(' '))

console.log(lastName)
console.log(firstName)