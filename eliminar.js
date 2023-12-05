const socket = new WebSocket('ws://localhost:8080/poli-rh');

function eliminarEmpleado() {
    // Obtener el valor del documento ingresado
    var documentoIngresado = document.getElementById("documento").value;

    // Crear el objeto JSON con el formato especificado
    var jsonEliminar = {
        accion: "ELIMINAR_EMPLEADO",
        datos: documentoIngresado
    };


    // Puedes usar el objeto jsonEliminar según tus necesidades
    console.log(jsonEliminar);
    socket.send(JSON.stringify(jsonEliminar));
}

socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    console.log('Mensaje recibido:', message);
    alert(message.datos);

      // Mostrar el resultado de la eliminación en la sección correspondiente
    var resultadoDiv = document.getElementById("resultado");

    if (message.accion != 'ERROR') {
        resultadoDiv.innerHTML = '<p style="color: green;">Empleado eliminado con éxito.</p>';
    } else {
        resultadoDiv.innerHTML = '<p style="color: red;">Error al eliminar el empleado.</p>';
    }
    
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