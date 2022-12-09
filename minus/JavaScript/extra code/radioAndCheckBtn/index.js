
document.getElementById("myButton").onclick = function(){

    const myCheckBox =  document.getElementById("myCheckBox")
    const visaBtn =  document.getElementById("visaBtn")
    const mastercardBtn =  document.getElementById("mastercardBtn")
    const paypalBtn =  document.getElementById("paypalBtn")

    if(myCheckBox.checked == true){
        console.log("you are subscribed")
    }
    else{
        console.log("you are not subscribed")
    }

    if(visaBtn.checked){
        console.log("you are paying with a visa")
    }
    else if(mastercardBtn.checked){
        console.log("you are paying with a mastercard")
    }
    else if(paypalBtn.checked){
        console.log("you are paying with a paypal")
    }
    else{
        console.log("you must select a payment type")
    }
}