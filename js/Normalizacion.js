
document.getElementById('formulario').addEventListener('submit', function(event) {
event.preventDefault();

const direccion = document.getElementById('direccionemprendimiento').value;


fetch(`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${direccion}`)
.then(response => response.json())
.then(data => {
    if (window.confirm("¿es tu direccion " + data.direccionesNormalizadas[0].direccion + " ?")){
    window.location.replace("index.html");
}
})
.catch(error => console.error('Error:', error));
}

);

