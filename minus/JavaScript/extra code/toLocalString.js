//toLocalString = men-return string dengan format negara yang dipilih
// biasa dipake untuk menformat currency
// numer.toLocalString(locale, {options})

// 'locale' = spesifikasi bahasa (undifined = default language yg dipake di pc)
// 'option' = object dengan format options

let myNum = 12345676.56
let myNum2 = 1.
//myNum = myNum.toLocaleString("id-IN")
//myNum = myNum.toLocaleString("en-US")
//myNum = myNum.toLocaleString("hi-IN")
//myNum = myNum.toLocaleString("de-DE")

myNum = myNum.toLocaleString("id-IN",{style: "currency", currency: "IDR"})

myNum2 = myNum2.toLocaleString(undefined,{style: "percent"})


console.log(myNum)
console.log(myNum2)