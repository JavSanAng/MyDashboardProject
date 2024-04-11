function openModal() {
    document.getElementById('modalDiv').style.display = 'none'; // Ocultar el botón
    window.modal2.showModal(); // Abre
}

function closeModal() {
    window.modal2.close(); // Cierra 
}

if( !localStorage.getItem('FirstVisit') ){

    document.getElementById('modalDiv').style.display= 'block';
    // meto en el localstorage el 1 en First Visit 
    localStorage.setItem('FirstVisit',1); 

} else {
    document.getElementById('modalDiv').style.display= 'none';
}



