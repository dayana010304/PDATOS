// Crear una instancia de WebSocket para la conexión al servidor en localhost en el puerto 8080
const socket = new WebSocket("ws://localhost:8080/poli-rh");

// Función para consultar información del empleado
function consultarEmpleado() {
  // Obtener el valor del documento ingresado desde el elemento con ID "documento"
  let documentoIngresado = document.getElementById("documento").value;

  // Crear un objeto JSON con la acción "CONSULTAR_EMPLEADO" y los datos del documento
  let jsonconsulta = {
    accion: "CONSULTAR_EMPLEADO",
    datos: documentoIngresado,
  };

  // Enviar la solicitud al servidor WebSocket en formato JSON
  socket.send(JSON.stringify(jsonconsulta));
}

// Evento que se ejecuta cuando la conexión WebSocket se establece con éxito
socket.addEventListener("open", (event) => {
  console.log("Conexión establecida con el servidor WebSocket");
});

// Evento que se ejecuta cuando la conexión WebSocket se cierra
socket.addEventListener("close", (event) => {
  console.log("Conexión cerrada con el servidor WebSocket");
});

// Evento que se ejecuta en caso de error en la conexión WebSocket
socket.addEventListener("error", (event) => {
  console.error("Error en la conexión WebSocket:", event);
});

// Evento que se ejecuta cuando se recibe un mensaje del servidor WebSocket
socket.addEventListener("message", (event) => {
  // Analizar el mensaje JSON recibido
  const message = JSON.parse(event.data);
  console.log("Mensaje recibido:", message);

  // Manejar mensajes de error y mostrar alerta si es necesario
  if (message.accion == "ERROR") {
    alert(message.datos);
    return;
  }

  // Mostrar el resultado en la sección correspondiente del documento HTML
  let resultadoDiv = document.getElementById("resultado");

  // Formatear la presentación de los datos recibidos
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

  // Asignar el resultado formateado al elemento HTML con ID "resultado"
  resultadoDiv.innerHTML = formattedResult;
});
