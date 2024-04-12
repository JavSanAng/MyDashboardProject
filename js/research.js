function openModal() {
    document.getElementById('modalDiv').style.display = 'none'; 
    window.modal2.show(); 
}

function closeModal() {
    window.modal2.close(); 
}

if( !localStorage.getItem('FirstVisit') ){

    document.getElementById('modalDiv').style.display= 'block';
    // meto en el localstorage el 1 en First Visit 
    localStorage.setItem('FirstVisit',1); 

} else {
    document.getElementById('modalDiv').style.display= 'none';
}



