// Escuchar el evento 'submit' del formulario con id 'clientForm'
document.getElementById('clientForm').addEventListener('submit', function(event) {
    // Prevenir el comportamiento por defecto del formulario (recargar la página)
    event.preventDefault();
    
    // Obtener los valores de los campos del formulario y eliminar los espacios en blanco al inicio y al final
    const cedula = document.getElementById('cedula').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const nombres = document.getElementById('nombres').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validar la cédula
    if (!validateCedula(cedula)) {
        alert("Cédula no válida");
        return; // Si la cédula no es válida, mostrar una alerta y detener el proceso
    }

    // Validar el correo electrónico
    if (!validateEmail(email)) {
        alert("Correo electrónico no válido");
        return; // Si el correo no es válido, mostrar una alerta y detener el proceso
    }

    // Crear un objeto con los datos del cliente
    const clientData = {
        cedula,
        apellidos,
        nombres,
        direccion,
        telefono,
        email
    };

    // Guardar los datos del cliente en localStorage
    localStorage.setItem('clientData', JSON.stringify(clientData));

    // Mostrar los datos del cliente en la página
    displayClientData(clientData);
});

// Función para validar la cédula
function validateCedula(cedula) {
    // Ejemplo simple de validación: comprobar que la cédula tiene 10 caracteres
    return cedula.length === 10;
}

// Función para validar el correo electrónico
function validateEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Comprobar que el correo cumple con la expresión regular
    return re.test(String(email).toLowerCase());
}

// Función para mostrar los datos del cliente en la página
function displayClientData(data) {
    // Obtener el div con id 'result'
    const resultDiv = document.getElementById('result');
    // Insertar los datos del cliente en el div 'result'
    resultDiv.innerHTML = `
        <h2>Datos Ingresados:</h2>
        <p><strong>Cédula:</strong> ${data.cedula}</p>
        <p><strong>Apellidos:</strong> ${data.apellidos}</p>
        <p><strong>Nombres:</strong> ${data.nombres}</p>
        <p><strong>Dirección:</strong> ${data.direccion}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Correo Electrónico:</strong> ${data.email}</p>
    `;
}
