function consultarEmpleado() {
  // Obtener el valor del documento ingresado
  var documentoIngresado = document.getElementById("documento").value;
  var jsonconsulta = {
    accion: "CONSULTAR_EMPLEADO",
    datos: {
      emplId: documentoIngresado,
    },
  };

  // Crear el objeto JSON de ejemplo con el documento ingresado
  var jsonEjemplo = {
    accion: "CONSULTAR_EMPLEADO",
    datos: {
      emplId: documentoIngresado,
      emplPrimerNombre: "John",
      emplSegundoNombre: "Doe",
      emplEmail: "john.doe@example.com",
      emplFechaNacimiento: "1990-01-01",
      emplSueldo: 50000,
      emplComision: 1000,
      emplCargoId: "Programador",
      emplGerenteId: "456",
      emplDptoId: "789",
    },
  };

  // Mostrar el resultado en la sección correspondiente
  var resultadoDiv = document.getElementById("resultado");

  // Formatear la presentación de los datos
  var formattedResult = `
        <p>Primer Nombre: ${jsonEjemplo.datos.emplPrimerNombre}</p>
        <p>Segundo Nombre: ${jsonEjemplo.datos.emplSegundoNombre}</p>
        <p>Email: ${jsonEjemplo.datos.emplEmail}</p>
        <p>Fecha de Nacimiento: ${jsonEjemplo.datos.emplFechaNacimiento}</p>
        <p>Sueldo: ${jsonEjemplo.datos.emplSueldo}</p>
        <p>Comisión: ${jsonEjemplo.datos.emplComision}</p>
        <p>Cargo ID: ${jsonEjemplo.datos.emplCargoId}</p>
        <p>Gerente ID: ${jsonEjemplo.datos.emplGerenteId}</p>
        <p>Departamento ID: ${jsonEjemplo.datos.emplDptoId}</p>
    `;

  // Asignar el resultado formateado al elemento HTML
  resultadoDiv.innerHTML = formattedResult;
  console.log(jsonEjemplo);
}
