//template literals =   ditandai dengan (``) dari pada ("") atau ('')
//                      funsi tersebut memungkinkan untuk men-embedded varibel dalam sebuah string

let userName = "Hello world"
let items = 3
let total = 75

//console.log(`Hello ${userName}`)
//console.log(`you have ${items} in your cart`)
//console.log(`your total is $${total}`)

let text =
`Hello ${userName}<br>
you have ${items} items in your cart<br> 
your total is $${total}<br>`

console.log(text)

document.getElementById("myLabel").innerHTML = text