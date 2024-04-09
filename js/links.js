
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos referencias a los elementos del HTML
	const linkContainer = document.getElementById("container-links")
    const nameInput = document.getElementById("nameInput");
	const urlInput = document.getElementById("linkInput");  // Campo de entrada para el nombre del enlace
    const btnSaveLink = document.getElementById("saveLinkButton"); // Botón para guardar el enlace
    const linksList = document.getElementById("linksList"); // Lista de enlaces guardados

    // Recuperamos los enlaces guardados en el almacenamiento local, o inicializamos un array vacío si no hay ninguno
    let savedLinks = JSON.parse(localStorage.getItem("links")) || [];

    // Función para añadir un nuevo enlace a la lista
    function addLinks(name, url) {
        savedLinks.push({ name, url }); // Añadimos el nuevo enlace al array de enlaces guardados
        localStorage.setItem("links", JSON.stringify(savedLinks)); // Guardamos la lista actualizada en el almacenamiento local
        linksRender(); // Renderizamos la lista de enlaces
    }

    // Función para eliminar un enlace de la lista
    function linksDelete(index) {
        savedLinks.splice(index, 1); // Eliminamos el enlace en la posición indicada/ numero de items a eliminar
        localStorage.setItem("links", JSON.stringify(savedLinks)); // Guardamos la lista actualizada en el almacenamiento local
        linksRender(); // Renderizamos la lista de enlaces
    }


    function linksRender() {
        // Generamos el HTML para cada enlace en la lista y lo metemos en la lista de enlaces
        linksList.innerHTML = savedLinks.map((link, index) => {
            return `
                <li>
                    <a href="${link.url}" target="_blank">${link.name}</a> <!-- Enlace con nombre -->
                    <button id= "crossList" onclick="linksDelete(${index})">X</button> <!-- Botón para eliminar el enlace -->
                </li>
            `;
        }).join(''); // Convertimos el array de HTML en una cadena para meterlo en el contenedor
    }

    // Botón de guardar enlace
    btnSaveLink.addEventListener("click", () => {
        const name = nameInput.value; 
        const url = urlInput.value; 
        if (name && url) { // mirar que los campos no estén vacíos
            addLinks(name, url); // Añadimos el enlace a la lista
            nameInput.value = ""; 
            urlInput.value = ""; 
        }
    });

    //linksDelete le damos ambito global para que se pueda  llamar desde el HTML
    window.linksDelete = linksDelete;

    linksRender();

	const linkMenuItem = document.querySelector('.item span[title="Links"]');
linkMenuItem.addEventListener('click', toggleKeysVisibility);

	function toggleKeysVisibility() {
		if (linkContainer.style.display === "" || linkContainer.style.display === "none") {
			linkContainer.style.display = "block";
		} else {
			linkContainer.style.display = "none";
		}
	}

});

