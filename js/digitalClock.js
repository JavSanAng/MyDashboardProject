
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const messageElement = document.getElementById("message");
const clockContainer = document.getElementById("container-clock");

// Actualiza la hora y fecha 
function updateTimeAndDate() {
    const local = new Date();
    const hh = formatTwoDigits(local.getHours());
    const mm = formatTwoDigits(local.getMinutes());
    const ss = formatTwoDigits(local.getSeconds());

    const day = formatTwoDigits(local.getDate());
    const month = formatTwoDigits(local.getMonth() + 1);
    const year = local.getFullYear();

    timeElement.textContent = `${hh}:${mm}:${ss}`;
    dateElement.textContent = `${day}/${month}/${year}`;

    updateMessage(hh, mm);
}

//Actualiza los mensajes
function updateMessage(hours, minutes) {
    const message = getMessage(hours, minutes);
    messageElement.textContent = message;
}

//Formatea un numero a dos digitos completando con ceros
function formatTwoDigits(number) {
    return number < 10 ? "0" + number : number;
}

//Funcion que obtiene el mensaje dependiendo de la hora y los minutos
function getMessage(hours, minutes) {
    if (hours < 7 || (hours === 7 && minutes < 30)) {
        return "Have you fallen asleep on the keyboard? Better go to bed, tomorrow will be another day";
    } else if (hours < 8 || (hours === 8 && minutes < 30)) {
        return "Good morning, coder! Ready to have some bytes for breakfast and conquer the world?";
    } else if (hours < 17 || (hours === 17 && minutes < 30)) {
        return "Hope you've had something to eat! If not, how about taking a snack break?";
    } else if (hours < 19 || (hours === 19 && minutes < 30)) {
        return "Good afternoon! Let's squeeze out those last bits of energy!";
    } else if (hours < 21 || (hours === 21 && minutes < 30)) {
        return "Still here? Consider stopping soon and doing some (virtual) socializing.";
    } else {
        return "Good night! Dreams can be the best code debugger.";
    }
}


// Agregar evento de clic al elemento del reloj en el menú
const clockMenuItem = document.querySelector('.item span[title="Clock"]');
clockMenuItem.addEventListener('click', toggleClockVisibility);

//Funcion para mostrar el reloj
function toggleClockVisibility() {
    if (clockContainer.style.display === "none" || clockContainer.style.display === "") {
        clockContainer.style.display = "block";
        localStorage.setItem('clockVisibility', 'pin');
    } else {
        clockContainer.style.display = "none";
        localStorage.setItem('clockVisibility', 'unnpin');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const clockVisibility = localStorage.getItem('clockVisibility');
    if (clockVisibility === 'pin') {
        clockContainer.style.display = "block";
    } else if (clockVisibility === 'unnpin') {
        clockContainer.style.display = "none";
    }
});

// Actualizar hora, fecha y mensaje cada segundo
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate()