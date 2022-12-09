document.getElementById("submitBtn").onclick = function(){
    let temp

    if(document.getElementById("cBtn").checked){
        temp = document.getElementById("textBox").value
        temp = Number(temp)
        temp = toCelcius(temp)
        document.getElementById("tempLabel").innerHTML = temp + "°C"

    }
    else if(document.getElementById("fBtn").checked){
        temp = document.getElementById("textBox").value
        temp = Number(temp)
        temp = toFahrenehit(temp)
        document.getElementById("tempLabel").innerHTML = temp + "°F"
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit"
    }
}


function toCelcius(temp){
    return (temp - 32)*(5/9)
}

function toFahrenehit(temp){
    return temp * 9 / 5 + 32
}