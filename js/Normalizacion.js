
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Registro realizado con exito!");
    window.location.replace("index.html");
});

function consultarAPI(direccion, select) {
    
    select.innerHTML = ""; 
    select.style.display="block";
    const confirmaDireccion = document.createElement("option");
    confirmaDireccion.value="";
    confirmaDireccion.textContent = "Seleccione su direccion correcta";
    select.appendChild(confirmaDireccion);
    
    fetch(`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${direccion}`)
    .then(response => response.json())
    .then(data => {
        for (let i=0;i<data.direccionesNormalizadas.length;i++){
            const option = document.createElement("option");
            option.value = data.direccionesNormalizadas[i].direccion;
            option.textContent = data.direccionesNormalizadas[i].direccion;
            select.appendChild(option);
        }
    }).catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    const inputDireccionParticular = document.getElementById("direccionparticular");

    inputDireccionParticular.addEventListener("change", () => {
        const direccionParticular = inputDireccionParticular.value.trim();
        const select = document.getElementById("direccionesParticulares");
        if (direccionParticular !== "") {
            try {
                consultarAPI(direccionParticular, select);
            } catch (error) {
                console.error("Error al consultar la API:", error);
            }
        }
    });

    const imputDireccionEmprendimiento = document.getElementById("direccionemprendimiento");
    imputDireccionEmprendimiento.addEventListener("change", () => {
        const direccionEmprendimiento = imputDireccionEmprendimiento.value.trim();
        const select = document.getElementById("direccionesEmprendimientos");
        if (direccionEmprendimiento !== "") {
            try {
                consultarAPI(direccionEmprendimiento, select);
            } catch (error) {
                console.error("Error al consultar la API:", error);
            }
        }
    });
});