// Crear una instancia de WebSocket para la conexión al servidor en localhost en el puerto 8080
const socket = new WebSocket("ws://localhost:8080/poli-rh");

// Función para editar la información de un empleado
function editarEmpleado() {
  // Obtener los valores de los campos del formulario
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

  // Crear un objeto JSON con la acción "ACTUALIZAR_EMPLEADO" y los datos del formulario
  var objetoJSON = {
    accion: "ACTUALIZAR_EMPLEADO",
    datos: {
      emplId: documento,
      emplPrimerNombre: primerNombre,
      emplSegundoNombre: segundoNombre,
      emplEmail: email,
      emplFechaNac: fechaNacimiento,
      emplSueldo: sueldo,
      emplComision: comision,
      emplCargoId: cargo,
      emplGerenteId: gerenteDocumento,
      emplDptoId: departamentoId,
    },
  };

  // Mostrar el objeto JSON en la consola antes de enviarlo
  console.log("Objeto JSON a enviar:", objetoJSON);

  // Enviar el objeto JSON al servidor a través del WebSocket
  socket.send(JSON.stringify(objetoJSON));
}

// Evento que se ejecuta cuando se recibe un mensaje del servidor WebSocket
socket.addEventListener("message", (event) => {
  // Analizar el mensaje JSON recibido
  const message = JSON.parse(event.data);

  // Mostrar en la consola el mensaje recibido
  console.log("Mensaje recibido:", message);

  // Mostrar una alerta con el mensaje de respuesta del servidor
  alert(message.datos);
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