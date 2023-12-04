function editarEmpleado() {
    // Obtener los valores de los campos
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

    // Crear el objeto JSON con el formato especificado
    var objetoJSON = {
        "accion": "ACTUALIZAR_EMPLEADO",
        "datos": {
            "emplId": documento,
            "emplPrimerNombre": primerNombre,
            "emplSegundoNombre": segundoNombre,
            "emplEmail": email,
            "emplFechaNacimiento": fechaNacimiento,
            "emplSueldo": sueldo,
            "emplComision": comision,
            "emplCargoId": cargo,
            "emplGerenteId": gerenteDocumento,
            "emplDptoId": departamentoId
        }
    };

    // Mostrar el objeto JSON en la consola
    console.log(objetoJSON);
}
