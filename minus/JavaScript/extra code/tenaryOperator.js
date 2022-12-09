/*Tenary operator = shortcut untuk if/else statement 
                    mengambil 3 operator
                    1. kondisi dengan ?
                    2. expresi if true
                    3. expresi if false

    kondisi ? exprIfTrue : expIfFalse
*/

let adult = checkAge(20);
console.log(adult)
checkWinner(true)

function checkAge(age){
    //contoh tenary operator    
    return age >= 18 ? true : false
}

//jika yg di return berupa boolean fuction tidak mesti memmakai return  
function checkWinner(win){

    win ? console.log("YOU WIN!!") : console.log("YOU LOSE")
}