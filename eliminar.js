function eliminarEmpleado() {
    // Obtener el valor del documento ingresado
    var documentoIngresado = document.getElementById("documento").value;

    // Crear el objeto JSON con el formato especificado
    var jsonEliminar = {
        accion: "ELIMINAR_EMPLEADO",
        datos: {
            emplId: documentoIngresado,
        },
    };

    // Realizar la eliminación (simulado aquí)
    var eliminadoExitoso = true;

    // Mostrar el resultado de la eliminación en la sección correspondiente
    var resultadoDiv = document.getElementById("resultado");

    if (eliminadoExitoso) {
        resultadoDiv.innerHTML = '<p style="color: green;">Empleado eliminado con éxito.</p>';
    } else {
        resultadoDiv.innerHTML = '<p style="color: red;">Error al eliminar el empleado.</p>';
    }

    // Puedes usar el objeto jsonEliminar según tus necesidades
    console.log(jsonEliminar);
}
