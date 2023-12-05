const socket = new WebSocket('ws://localhost:8080/poli-rh');

function consultarEmpleado() {
  // Obtener el valor del documento ingresado
  let documentoIngresado = document.getElementById("documento").value;

  let jsonconsulta = {
    accion: "CONSULTAR_EMPLEADO",
    datos: documentoIngresado
  };

  socket.send(JSON.stringify(jsonconsulta));
}

socket.addEventListener('open', (event) => {
  console.log('Conexión establecida con el servidor WebSocket');
});

socket.addEventListener('close', (event) => {
  console.log('Conexión cerrada con el servidor WebSocket');
});

socket.addEventListener('error', (event) => {
  console.error('Error en la conexión WebSocket:', event);
});


socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  console.log('Mensaje recibido:', message);

  if (message.accion == 'ERROR') {
    alert(message.datos);
    return;
  }
  
  // Mostrar el resultado en la sección correspondiente
  let resultadoDiv = document.getElementById("resultado");

  // Formatear la presentación de los datos
  let formattedResult = `
        <p>Primer Nombre: ${message.datos.emplPrimerNombre}</p>
        <p>Segundo Nombre: ${message.datos.emplSegundoNombre}</p>
        <p>Email: ${message.datos.emplEmail}</p>
        <p>Fecha de Nacimiento: ${message.datos.emplFechaNacimiento}</p>
        <p>Sueldo: ${message.datos.emplSueldo}</p>
        <p>Comisión: ${message.datos.emplComision}</p>
        <p>Cargo ID: ${message.datos.emplCargoId}</p>
        <p>Gerente ID: ${message.datos.emplGerenteId}</p>
        <p>Departamento ID: ${message.datos.emplDptoId}</p>
    `;

  // Asignar el resultado formateado al elemento HTML
  resultadoDiv.innerHTML = formattedResult;

});
