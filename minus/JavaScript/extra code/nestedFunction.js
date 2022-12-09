//nested functions

let userName = "ali"
let userInbox = 0

login()

function login(){
    displayUsername()
    displayUserInbox()

    function displayUsername(){
        console.log(`Welcome ${userName}`)
    }

    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`)
    }
}
