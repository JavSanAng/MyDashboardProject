function openModal() {
    document.getElementById('modalDiv').style.display = 'none'; // Ocultar el botón
    window.modal2.showModal(); // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
    window.modal2.close(); // Cerrar el modal
}

if( !localStorage.getItem('FirstVisit') ){

    document.getElementById('modalDiv').style.display= 'block';
    // estableces el localstorage en 1 para que no se vuelva a cumplir la condicion
    localStorage.setItem('FirstVisit',1); 

} else {
    document.getElementById('modalDiv').style.display= 'none';
}

