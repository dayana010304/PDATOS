const socket = new WebSocket('ws://localhost:8080/poli-rh');

function crearObjetoJSON() {
    // Obtener valores del formulario
    var documento = document.getElementById("documento").value;
    var primerNombre = document.getElementById("PrimerNombre").value;
    var segundoNombre = document.getElementById("SegundoNombre").value;
    var email = document.getElementById("email").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var sueldo = document.getElementById("sueldo").value;
    var comision = document.getElementById("comision").value;
    var cargo = document.getElementById("Cargo").value;
    var gerenteDocumento = document.getElementById("gerenteDocumento").value;
    var departamentoId = document.getElementById("departamentoId").value;

    // Crear objeto JSON
    var objetoJSON = {
        "accion": "CREAR_EMPLEADO",
        "datos": {
            "emplId": documento,
            "emplPrimerNombre": primerNombre,
            "emplSegundoNombre": segundoNombre,
            "emplEmail": email,
            "emplFechaNac": fechaNacimiento,
            "emplSueldo": sueldo,
            "emplComision": comision,
            "emplCargoId": cargo,
            "emplGerenteId": gerenteDocumento,
            "emplDptoId": departamentoId
        }
    };

    // Mostrar en consola el JSON
    console.log(objetoJSON);

    socket.send(JSON.stringify(objetoJSON));
}

socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    console.log('Mensaje recibido:', message);
    alert(message.datos);

});

socket.addEventListener('open', (event) => {
    console.log('Conexión establecida con el servidor WebSocket');
});

socket.addEventListener('close', (event) => {
    console.log('Conexión cerrada con el servidor WebSocket');
});

socket.addEventListener('error', (event) => {
    console.error('Error en la conexión WebSocket:', event);
});
