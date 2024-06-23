
document.getElementById('formulario').addEventListener('submit', function(event) {
event.preventDefault();

const direccionEmprendimiento = document.getElementById('direccionemprendimiento').value;
const direccionParticular = document.getElementById('direccionparticular').value;


if(direccionEmprendimiento!=""){
fetch(`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${direccionEmprendimiento}`)
.then(response => response.json())
.then(data => {
    for (let i=0;i<data.direccionesNormalizadas.length;i++){
    if (window.confirm("¿es la direccion de tu emprendimiento " + data.direccionesNormalizadas[i].direccion + " ?")){
    window.location.replace("index.html");
    break;
}
}
})
.catch(error => console.error('Error:', error));
}

fetch(`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${direccionParticular}`)
.then(response => response.json())
.then(data => {
    for (let i=0;i<data.direccionesNormalizadas.length;i++){
    if (window.confirm("¿es tu direccion particular " + data.direccionesNormalizadas[i].direccion + " ?")){
    window.location.replace("index.html");
    break;
}
}
})
.catch(error => console.error('Error:', error));

}

);

