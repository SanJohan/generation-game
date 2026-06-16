const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const datosUsuario = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };

    localStorage.setItem('datos-contacto', JSON.stringify(datosUsuario));

    console.log("Datos guardados con éxito en localStorage:", datosUsuario);
    alert("¡Tus datos de contacto han sido guardados en el navegador correctamente!");

    formulario.reset();
});