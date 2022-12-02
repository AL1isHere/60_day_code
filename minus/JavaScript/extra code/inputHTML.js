let username

//input melalui Window promt
username = window.prompt("what's your name?");
console.log(username)

//input dengan textbox HTML
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("myLabel").innerHTML="Hello " + username
}