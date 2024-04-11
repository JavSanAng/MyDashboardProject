// const buttonGenerate = document.getElementById("btnGenerate");
// const result = document.getElementById("resultKey");
// const keysContainer = document.getElementById("container-keys");
// function validationNumber() {
//     const lengthKey = document.getElementById("lengthKey");
//     const number = parseInt(lengthKey.value);
//     const error = document.getElementById("error");
//     if (number >= 12 && number <= 50) {
//         console.log("Your number is valid", number);
//         error.innerText = ""; // Limpiar el error
//         generateKey(number); // Llamar a la función para generar contraseña
//     } else {
//         error.innerText = "Your number is not valid, remember min 12 max 50";
//     }
// }
// buttonGenerate.addEventListener("click", validationNumber);
// function generateKey(lengthKey) {
//     const capitalLetter = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"];
//     const lowerLetter = [ " a b c d e f g h i j k l m n o p q r s t u v w x y z"];
//     const numbers = ["0 1 2 3 4 5 6 7 8 9"];
//     const symbol = ["! @ # $ % ^ & * ( ) - _ = +"];
//     const keyCaracters = capitalLetter + lowerLetter + numbers + symbol;
//     let randomKey = '';
//     for (let i = 0; i<lengthKey; i++){
//         const randomIndex = Math.floor(Math.random()*keyCaracters.length);
//         randomKey += keyCaracters[randomIndex];
//     }
//     return result.innerText = ('Key: ${randomKey}');
//     }
// const keysMenuItem = document.querySelector('.item span[title="Contraseñas"]');
// keysMenuItem.addEventListener('click', toggleKeysVisibility);
// function toggleKeysVisibility() {
//     if (keysContainer.style.display === "" || keysContainer.style.display === "none") {
//         keysContainer.style.display = "block";
//     } else {
//         keysContainer.style.display = "none";
//     }
// }

const buttonGenerate = document.getElementById("btnGenerate");
const result = document.getElementById("resultKey");
const keysContainer = document.getElementById("container-keys");

function validationNumber() {
    const lengthKey = document.getElementById("lengthKey");
    const number = parseInt(lengthKey.value);
    const error = document.getElementById("error");
    if (number >= 12 && number <= 50) {
        console.log("Your number is valid", number);
        error.innerText = "";
        generateKey(number); 
    } else {
        result.innerText = "";
        error.innerText = "Your number is not valid, remember min 12 max 50";
    }
}

buttonGenerate.addEventListener("click", validationNumber);

function generateKey(lengthKey) {
    const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbol = "!@#$%^&*()-_=+";
    const keyCharacters = capitalLetter + lowerLetter + numbers + symbol;
    let randomKey = '';
    for (let i = 0; i < lengthKey; i++){
        const randomIndex = Math.floor(Math.random() * keyCharacters.length);
        randomKey += keyCharacters[randomIndex];
    }
    result.innerText = 'Key: ' + randomKey;
}

const keysMenuItem = document.querySelector('.item span[title="KeysGenerator"]');
keysMenuItem.addEventListener('click', toggleKeysVisibility);

function toggleKeysVisibility() {
    if (keysContainer.style.display === "" || keysContainer.style.display === "none") {
        keysContainer.style.display = "block";
        localStorage.setItem('keyVisibility', 'pin');
    } else {
        keysContainer.style.display = "none";
        localStorage.setItem('keyVisibility', 'unnpin');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const keyVisibility = localStorage.getItem('keyVisibility');
    if (keyVisibility === 'pin') {
        keysContainer.style.display = "block";
    } else if (keyVisibility === 'unnpin') {
        keysContainer.style.display = "none";
    }
});