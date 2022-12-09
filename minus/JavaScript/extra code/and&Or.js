//&&(and) and ||(or)

let temp = 15;
let sunny = true;

//and &&
if(temp > 0 && temp < 30 && sunny){
    console.log("the weather is good")
}
else{
    console.log("the weather is bad")
}

//or ||
if(temp <= 0 || temp >= 30){
    console.log("the weather is bad")
}
else{
    console.log("the weather is good")
}