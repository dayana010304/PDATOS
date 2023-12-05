// Crear una instancia de WebSocket para la conexión al servidor en localhost en el puerto 8080
const socket = new WebSocket("ws://localhost:8080/poli-rh");

// Función para eliminar un empleado
function eliminarEmpleado() {
  // Obtener el valor del documento ingresado desde el formulario
  var documentoIngresado = document.getElementById("documento").value;

  // Crear un objeto JSON con la acción "ELIMINAR_EMPLEADO" y los datos del documento
  var jsonEliminar = {
    accion: "ELIMINAR_EMPLEADO",
    datos: documentoIngresado,
  };

  // Mostrar en la consola el objeto JSON antes de enviarlo
  console.log("Objeto JSON a enviar:", jsonEliminar);

  // Enviar el objeto JSON al servidor a través del WebSocket
  socket.send(JSON.stringify(jsonEliminar));
}

// Evento que se ejecuta cuando se recibe un mensaje del servidor WebSocket
socket.addEventListener("message", (event) => {
  // Analizar el mensaje JSON recibido
  const message = JSON.parse(event.data);

  // Mostrar en la consola el mensaje recibido
  console.log("Mensaje recibido:", message);

  // Mostrar una alerta con el mensaje de respuesta del servidor
  alert(message.datos);

  // Mostrar el resultado de la eliminación en la sección correspondiente del documento HTML
  var resultadoDiv = document.getElementById("resultado");

  if (message.accion != "ERROR") {
    resultadoDiv.innerHTML =
      '<p style="color: green;">Empleado eliminado con éxito.</p>';
  } else {
    resultadoDiv.innerHTML =
      '<p style="color: red;">Error al eliminar el empleado.</p>';
  }
});

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
