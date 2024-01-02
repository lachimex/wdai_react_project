let inputMessage = document.getElementById('message');
let numDisplay = document.getElementById("current");
inputMessage.addEventListener("keyup", countCharacters);

function countCharacters(){
    let num = inputMessage.value.length;
    numDisplay.innerHTML = num;
}

let email = document.getElementById("email");

function validate(){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let emailValidation = emailRegex.test(email.value);
    if (!emailValidation) {
        alert("Niepoprawny email");
        return false;
    }
    return true;
}