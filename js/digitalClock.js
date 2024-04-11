// const time = document.getElementById("time");
// const date = document.getElementById("date");
// const messageElement = document.getElementById("message");

// function currentTime () {
// // Guardo hora local
//     const local = new Date();
//     let hh = local.getHours();
//     let mm = local.getMinutes();
//     let ss = local.getSeconds();

//     hh = (hh < 10) ? "0" + hh : hh ;
//     mm = (mm < 10) ? "0" + mm : mm ;
//     ss = (ss < 10) ? "0" + ss : ss ;

//     let day = local.getDate();
//     let month = local.getMonth() + 1;
//     let year = local.getFullYear();

//     day = (day < 10) ? "0" + day : day;
//     month = (month < 10) ? "0" + month : month;

//     time.innerHTML = `${hh}:${mm}:${ss}`;
//     date.innerHTML = `${day}/${month}/${year}`;

//     // Obtener el mensaje correspondiente a la hora actual
//     const message = getMessage(hh,mm);
//     // Mostrar el mensaje en el elemento message
//     messageElement.innerHTML = message;
// }

// // Ejecuta cada segundo el codigo
// setInterval(currentTime , 1000);

// const getMessage = (hours, minutes) => {
//     if (hours >= 0 && hours <= 7 && minutes < 30) {
//         return "¿Ya te dormiste en el teclado? Mejor ve a la cama, mañana será otro día";
//     } else if (hours > 7 && hours <= 14 && minutes < 30) {
//         return "¡Buenos días, codificador! ¿Listo para desayunar bytes y dominar el mundo?";
//     } else if (hours > 14 && hours <= 16 && minutes < 30) {
//         return "¡Espero que hayas comido algo! Si no, ¿qué tal una pausa para picar algo?";
//     } else if (hours > 16 && hours <= 18 && minutes < 30) {
//         return "¡Buenas tardes! ¡Vamos a exprimir esos últimos bits de energía!";
//     } else if (hours >= 18 && hours <= 20 && minutes < 30) {
//         return "¿Sigues aquí? Piensa en parar pronto y hacer algo de vida social (virtual, al menos).";
//     } else {
//         return "¡Buenas noches! Los sueños pueden ser el mejor depurador de código.";
//     }
// }

// const timeElement = document.getElementById("time");
// const dateElement = document.getElementById("date");
// const messageElement = document.getElementById("message");

// function updateTimeAndDate() {
//   const local = new Date();
//   const hh = formatTwoDigits(local.getHours());
//   const mm = formatTwoDigits(local.getMinutes());
//   const ss = formatTwoDigits(local.getSeconds());

//   const day = formatTwoDigits(local.getDate());
//   const month = formatTwoDigits(local.getMonth() + 1);
//   const year = local.getFullYear();

//   timeElement.innerHTML = `${hh}:${mm}:${ss}`;
//   dateElement.innerHTML = `${day}/${month}/${year}`;

//   updateMessage(hh, mm);
// }

// function updateMessage(hours, minutes) {
//   const message = getMessage(hours, minutes);
//   messageElement.innerHTML = message;
// }

// function formatTwoDigits(number) {
//   return number < 10 ? "0" + number : number;
// }

// function getMessage(hours, minutes) {
//   if (hours >= 0 && hours <= 7 && minutes < 30) {
//     return "¿Ya te dormiste en el teclado? Mejor ve a la cama, mañana será otro día";
//   } else if (hours > 7 && hours <= 14 && minutes < 30) {
//     return "¡Buenos días, codificador! ¿Listo para desayunar bytes y dominar el mundo?";
//   } else if (hours > 14 && hours <= 16 && minutes < 30) {
//     return "¡Espero que hayas comido algo! Si no, ¿qué tal una pausa para picar algo?";
//   } else if (hours > 16 && hours <= 18 && minutes < 30) {
//     return "¡Buenas tardes! ¡Vamos a exprimir esos últimos bits de energía!";
//   } else if (hours >= 18 && hours <= 20 && minutes < 30) {
//     return "¿Sigues aquí? Piensa en parar pronto y hacer algo de vida social (virtual, al menos).";
//   } else {
//     return "¡Buenas noches! Los sueños pueden ser el mejor depurador de código.";
//   }
// }

// // Actualizar hora, fecha y mensaje cada segundo
// setInterval(updateTimeAndDate, 1000);

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
        return "¿Ya te dormiste en el teclado? Mejor ve a la cama, mañana será otro día";
    } else if (hours < 8 || (hours === 8 && minutes < 30)) {
        return "¡Buenos días, codificador! ¿Listo para desayunar bytes y dominar el mundo?";
    } else if (hours < 17 || (hours === 17 && minutes < 30)) {
        return "¡Espero que hayas comido algo! Si no, ¿qué tal una pausa para picar algo?";
    } else if (hours < 19 || (hours === 19 && minutes < 30)) {
        return "¡Buenas tardes! ¡Vamos a exprimir esos últimos bits de energía!";
    } else if (hours < 21 || (hours === 21 && minutes < 30)) {
        return "¿Sigues aquí? Piensa en parar pronto y hacer algo de vida social (virtual, al menos).";
    } else {
        return "¡Buenas noches! Los sueños pueden ser el mejor depurador de código.";
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
